import SupermarketDetail from "view/supermarketDetail";
import SupermarketDetailDataProvider from "view/supermarketDetail/context/SupermarketDetailDataProvider";
import {GetStaticPaths, GetStaticProps} from "next";
import {dehydrate, QueryClient} from "react-query";
import {IGetVendorDetailData} from "types/interfaceVendorDetail";
import getSupermarketDetail, {QUERY_KEY_SUPERMARKET_DETAIL} from "api/getSupermarketDetail";
import LogisticPriceProvider from "context/LogisticPriceProvider";
import getLogisticCurrentPrice, {QUERY_KEY_LOGISTIC_CURRENT_PRICE} from "api/getLogisticCurrentPrice";

function SupermarketDetailPage() {
  return (
    <SupermarketDetailDataProvider>
      <LogisticPriceProvider>
        <SupermarketDetail />
      </LogisticPriceProvider>
    </SupermarketDetailDataProvider>
  );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const queryClient = new QueryClient();
  const queryKey = [QUERY_KEY_SUPERMARKET_DETAIL, params?.id];
  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => getSupermarketDetail({isServer: true, id: params?.id as string}),
  });
  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY_LOGISTIC_CURRENT_PRICE],
    queryFn: () => getLogisticCurrentPrice(true),
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

export default SupermarketDetailPage;
