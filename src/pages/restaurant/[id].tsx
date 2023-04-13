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
import RestaurantDetailIdProvider from "view/restaurantDetail/context/RestaurantDetailIdProvider";

interface IRestaurantDetailPage {
  vendorId: string;
}

function RestaurantDetailPage(props: IRestaurantDetailPage) {
  const {vendorId} = props;
  return (
    <RestaurantDetailDataProvider>
      <RestaurantDetailIdProvider vendorId={vendorId}>
        <LogisticPriceProvider>
          <RestaurantDetail />
        </LogisticPriceProvider>
      </RestaurantDetailIdProvider>
    </RestaurantDetailDataProvider>
  );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const queryClient = new QueryClient();
  const vendorId = params?.id;
  const queryKey = [QUERY_KEY_RESTAURANT_DETAIL, vendorId];
  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => getVendorDetail({isServer: true, id: vendorId as string}),
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

export default RestaurantDetailPage;
