import RestaurantInfo from "view/restaurantInfo";
import {GetStaticPaths, GetStaticProps} from "next";
import {dehydrate, QueryClient} from "react-query";
import getVendorDetail from "api/getVendorDetail";
import {IGetVendorDetailData} from "types/interfaceVendorDetail";
import RestaurantInfoDataProvider, {
  QUERY_KEY_RESTAURANT_INFO,
} from "view/restaurantInfo/context/RestaurantInfoDataProvider";

function RestaurantInfoPage() {
  return (
    <RestaurantInfoDataProvider>
      <RestaurantInfo />
    </RestaurantInfoDataProvider>
  );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const queryClient = new QueryClient();
  const queryKey = [QUERY_KEY_RESTAURANT_INFO, params?.id];
  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => getVendorDetail({isServer: true, id: params?.id as string}),
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
export default RestaurantInfoPage;
