import {GetServerSideProps} from "next";
import VendorSubcategory from "view/vendorSubcategory";
import VendorSubcategoryDataProvider from "view/vendorSubcategory/context/VendorSubcategoryDataProvider";
import VendorSubcategoryCategoryListDataProvider from "view/vendorSubcategory/context/VendorSubcategoryCategoryListDataProvider";
import {dehydrate, QueryClient} from "react-query";
import getSupermarketDetail from "api/getSupermarketDetail";
import {createPaginationParams} from "utils/utils";
import getSupermarketGroupProducts, {IGetSupermarketGroupProductsRes} from "api/getSupermarketGroupProducts";
import {ReactQueryKey, vendorsAddress} from "utils/Const";
import VendorSubcategoryParamsProvider from "view/vendorSubcategory/context/VendorSubcategoryParamsProvider";

export interface IVendorSubcategoryPage {
  vendor: string;
  vendorId: string;
  categoryId: string;
  subcategoryId: string;
}

function VendorSubcategoryPage(props: IVendorSubcategoryPage) {
  return (
    <VendorSubcategoryParamsProvider {...props}>
      <VendorSubcategoryDataProvider>
        <VendorSubcategoryCategoryListDataProvider>
          <VendorSubcategory />
        </VendorSubcategoryCategoryListDataProvider>
      </VendorSubcategoryDataProvider>
    </VendorSubcategoryParamsProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({params, query}) => {
  const queryClient = new QueryClient();
  const vendor = params?.vendor;
  const vendorId = params?.id;
  const categoryId = params?.category;
  const subcategoryId = params?.subcategory;
  const vendorItem = vendorsAddress.find((item) => item.name === vendor);
  if (
    vendorItem?.isSupermarket &&
    vendor &&
    vendorId &&
    categoryId &&
    subcategoryId &&
    !Array.isArray(vendor) &&
    !Array.isArray(vendorId) &&
    !Array.isArray(categoryId) &&
    !Array.isArray(subcategoryId)
  ) {
    const queryKey = [ReactQueryKey.VENDOR_SUBCATEGORY_GROUP_PRODUCTS, vendorId, categoryId, subcategoryId];
    const categoryQueryKey = [ReactQueryKey.VENDOR_DETAIL_SUPERMARKET, vendorId];
    const tmpQuery = {...query};
    delete tmpQuery?.id;
    delete tmpQuery?.category;
    delete tmpQuery?.subcategory;
    delete tmpQuery?.page;
    let queryParams = createPaginationParams(tmpQuery);
    await queryClient.prefetchInfiniteQuery({
      queryKey,
      queryFn: () =>
        getSupermarketGroupProducts({isServer: true, params: queryParams, vendorId, categoryId: subcategoryId}),
    });
    await queryClient.prefetchQuery({
      queryKey: categoryQueryKey,
      queryFn: () => getSupermarketDetail({isServer: true, id: vendorId}),
    });
    const queryState = queryClient.getQueryState<IGetSupermarketGroupProductsRes, {status: number}>(queryKey);
    const status = queryState?.error?.status;
    if (status === 404) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
        vendor,
        vendorId,
        categoryId,
        subcategoryId,
      },
    };
  }
  return {
    notFound: true,
  };
};

export default VendorSubcategoryPage;
