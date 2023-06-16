import VendorCategory from "view/vendorCategory";
import VendorCategoryDataProvider from "view/vendorCategory/context/VendorCategoryDataProvider";
import VendorCategoryListDataProvider from "view/vendorCategory/context/VendorCategoryListDataProvider";
import VendorCategorySubcategoryFilterProvider from "view/vendorCategory/context/VendorCategorySubcategoryFilterProvider";
import VendorCategoryParamsProvider from "view/vendorCategory/context/VendorCategoryParamsProvider";
import {GetStaticPaths, GetStaticProps} from "next";
import {dehydrate, QueryClient} from "react-query";
import {ReactQueryKey, vendorsAddress} from "utils/Const";
import getSupermarketDetail from "api/getSupermarketDetail";
import getSupermarketProducts from "api/getSupermarketProducts";
import {IGetVendorDetailData} from "types/interfaceVendorDetail";

export interface IVendorCategoryPage {
  vendor: string;
  vendorId: string;
  categoryId: string;
}

function VendorCategoryPage(props: IVendorCategoryPage) {
  return (
    <VendorCategoryParamsProvider {...props}>
      <VendorCategoryDataProvider>
        <VendorCategoryListDataProvider>
          <VendorCategorySubcategoryFilterProvider>
            <VendorCategory />
          </VendorCategorySubcategoryFilterProvider>
        </VendorCategoryListDataProvider>
      </VendorCategoryDataProvider>
    </VendorCategoryParamsProvider>
  );
}

export default VendorCategoryPage;

export const getStaticProps: GetStaticProps = async ({params}) => {
  const queryClient = new QueryClient();
  const vendor = params?.vendor;
  const vendorId = params?.id;
  const categoryId = params?.category;
  const vendorItem = vendorsAddress.find((item) => item.name === vendor);
  if (
    vendorItem?.isSupermarket &&
    vendor &&
    vendorId &&
    categoryId &&
    !Array.isArray(vendor) &&
    !Array.isArray(vendorId) &&
    !Array.isArray(categoryId)
  ) {
    const queryKey = [ReactQueryKey.VENDOR_CATEGORY_PRODUCT_LIST, vendorId, categoryId];
    const categoryQueryKey = [ReactQueryKey.VENDOR_DETAIL_SUPERMARKET, vendorId];
    await queryClient.prefetchQuery({
      queryKey,
      queryFn: () => getSupermarketProducts({isServer: true, vendorId, categoryId}),
    });
    await queryClient.prefetchQuery({
      queryKey: categoryQueryKey,
      queryFn: () => getSupermarketDetail({isServer: true, id: vendorId}),
    });
    const queryState = queryClient.getQueryState<IGetVendorDetailData, {status: number}>(queryKey);
    const status = queryState?.error?.status;
    if (status === 404) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        vendor,
        vendorId,
        categoryId,
      },
      revalidate: 60,
    };
  }
  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
