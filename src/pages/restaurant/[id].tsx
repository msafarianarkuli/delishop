import RestaurantDetail from "view/restaurantDetail";
import {GetStaticPaths, GetStaticProps} from "next";
import {dehydrate, QueryClient} from "react-query";
import RestaurantDetailDataProvider, {
  QUERY_KEY_RESTAURANT_DETAIL,
} from "view/restaurantDetail/context/RestaurantDetailDataProvider";
import getVendorDetail from "api/getVendorDetail";
import {IGetVendorDetailData} from "types/interfaceVendorDetail";
import LogisticPriceProvider from "context/LogisticPriceProvider";
import getLogisticCurrentPrice, {QUERY_KEY_LOGISTIC_CURRENT_PRICE} from "api/getLogisticCurrentPrice";

function RestaurantDetailPage() {
  return (
    <RestaurantDetailDataProvider>
      <LogisticPriceProvider>
        <RestaurantDetail />
      </LogisticPriceProvider>
    </RestaurantDetailDataProvider>
  );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const queryClient = new QueryClient();
  const queryKey = [QUERY_KEY_RESTAURANT_DETAIL, params?.id];
  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => getVendorDetail({isServer: true, id: params?.id as string}),
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

export default RestaurantDetailPage;
