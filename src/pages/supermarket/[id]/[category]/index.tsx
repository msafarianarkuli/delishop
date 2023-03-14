import SupermarketCategory from "view/supermarketCategory";
import SupermarketCategoryDataProvider, {
  QUERY_KEY_SUPERMARKET_PRODUCTS_LIST,
} from "view/supermarketCategory/context/SupermarketCategoryDataProvider";
import {GetStaticPaths, GetStaticProps} from "next";
import {dehydrate, QueryClient} from "react-query";
import {IGetVendorDetailData} from "types/interfaceVendorDetail";
import getSupermarketProducts from "api/getSupermarketProducts";
import SupermarketCategoryListDataProvider from "view/supermarketCategory/context/SupermarketCategoryListDataProvider";
import getSupermarketDetail, {QUERY_KEY_SUPERMARKET_DETAIL} from "api/getSupermarketDetail";
import SupermarketCategorySubcategoryFilterProvider from "view/supermarketCategory/context/SupermarketCategorySubcategoryFilterProvider";
import SupermarketCategoryIdProvider from "view/supermarketCategory/context/SupermarketCategoryIdProvider";

interface ISupermarketCategoryPage {
  categoryId: string;
  vendorId: string;
}

function SupermarketCategoryPage(props: ISupermarketCategoryPage) {
  const {categoryId, vendorId} = props;

  return (
    <SupermarketCategoryDataProvider>
      <SupermarketCategoryListDataProvider>
        <SupermarketCategorySubcategoryFilterProvider>
          <SupermarketCategoryIdProvider categoryId={categoryId} vendorId={vendorId}>
            <SupermarketCategory />
          </SupermarketCategoryIdProvider>
        </SupermarketCategorySubcategoryFilterProvider>
      </SupermarketCategoryListDataProvider>
    </SupermarketCategoryDataProvider>
  );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const queryClient = new QueryClient();
  let vendorId = "";
  let categoryId = "";
  if (params?.id && !Array.isArray(params?.id)) {
    vendorId = params.id;
  }
  if (params?.category && !Array.isArray(params?.category)) {
    categoryId = params.category;
  }
  const queryKey = [QUERY_KEY_SUPERMARKET_PRODUCTS_LIST, vendorId, categoryId];
  const categoryQueryKey = [QUERY_KEY_SUPERMARKET_DETAIL, vendorId];
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
      categoryId,
      vendorId,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default SupermarketCategoryPage;
