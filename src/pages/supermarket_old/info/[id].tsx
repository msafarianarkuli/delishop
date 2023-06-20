import SupermarketInfo from "view/supermarketInfo";
import SupermarketInfoDataProvider from "view/supermarketInfo/context/SupermarketInfoDataProvider";
import {GetStaticPaths, GetStaticProps} from "next";
import {dehydrate, QueryClient} from "react-query";
import getSupermarketDetail, {QUERY_KEY_SUPERMARKET_DETAIL} from "api/getSupermarketDetail";
import {IGetVendorDetailData} from "types/interfaceVendorDetail";

function SupermarketInfoPage() {
  return (
    <SupermarketInfoDataProvider>
      <SupermarketInfo />
    </SupermarketInfoDataProvider>
  );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const queryClient = new QueryClient();
  const queryKey = [QUERY_KEY_SUPERMARKET_DETAIL, params?.id];
  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => getSupermarketDetail({isServer: true, id: params?.id as string}),
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

export default SupermarketInfoPage;
