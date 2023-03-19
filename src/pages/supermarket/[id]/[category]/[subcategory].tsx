import SupermarketSubcategory from "view/supermarketSubcategory";
import SupermarketSubcategoryDataProvider, {
  QUERY_KEY_SUPERMARKET_GROUP_PRODUCTS,
} from "view/supermarketSubcategory/context/SupermarketSubcategoryDataProvider";
import {GetServerSideProps} from "next";
import {dehydrate, QueryClient} from "react-query";
import {createPaginationParams} from "utils/utils";
import getSupermarketGroupProducts, {IGetSupermarketGroupProductsRes} from "api/getSupermarketGroupProducts";
import getSupermarketDetail, {QUERY_KEY_SUPERMARKET_DETAIL} from "api/getSupermarketDetail";
import SupermarketSubcategoryCategoryListDataProvider from "view/supermarketSubcategory/context/SupermarketSubcategoryCategoryListDataProvider";

function SupermarketSubcategoryPage() {
  return (
    <SupermarketSubcategoryDataProvider>
      <SupermarketSubcategoryCategoryListDataProvider>
        <SupermarketSubcategory />
      </SupermarketSubcategoryCategoryListDataProvider>
    </SupermarketSubcategoryDataProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({params, query}) => {
  const queryClient = new QueryClient();
  const page = query?.page;
  let vendorId = "";
  let categoryId = "";
  let subcategoryId = "";
  if (params?.id && !Array.isArray(params?.id)) {
    vendorId = params.id;
  }
  if (params?.category && !Array.isArray(params?.category)) {
    categoryId = params.category;
  }
  if (params?.subcategory && !Array.isArray(params?.subcategory)) {
    subcategoryId = params.subcategory;
  }
  const queryKey = [QUERY_KEY_SUPERMARKET_GROUP_PRODUCTS, vendorId, categoryId, subcategoryId, "1"];
  const categoryQueryKey = [QUERY_KEY_SUPERMARKET_DETAIL, vendorId];
  const tmpQuery = {...query};
  delete tmpQuery?.id;
  delete tmpQuery?.category;
  delete tmpQuery?.subcategory;
  let queryParams = createPaginationParams(tmpQuery);
  if (page && !Array.isArray(page) && !isNaN(+page)) {
    queryKey[4] = page;
  }
  await queryClient.prefetchQuery({
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
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default SupermarketSubcategoryPage;
