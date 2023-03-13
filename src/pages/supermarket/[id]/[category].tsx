import SupermarketCategory from "view/supermarketCategory";
import SupermarketCategoryDataProvider, {
  QUERY_KEY_SUPERMARKET_PRODUCTS_LIST,
} from "view/supermarketCategory/context/SupermarketCategoryDataProvider";
import {GetStaticPaths, GetStaticProps} from "next";
import {dehydrate, QueryClient} from "react-query";
import {IGetVendorDetailData} from "types/interfaceVendorDetail";
import getSupermarketProducts from "api/getSupermarketProducts";

function SupermarketCategoryPage() {
  return (
    <SupermarketCategoryDataProvider>
      <SupermarketCategory />
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
  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => getSupermarketProducts({isServer: true, vendorId, categoryId}),
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
