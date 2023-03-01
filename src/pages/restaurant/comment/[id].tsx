import RestaurantComment from "view/restaurantComment";
import {GetServerSideProps} from "next";
import {dehydrate, QueryClient} from "react-query";
import RestaurantCommentDataProvider, {
  QUERY_KEY_RESTAURANT_COMMENTS,
} from "view/restaurantComment/context/RestaurantCommentDataProvider";
import getVendorComments, {IGetVendorCommentsRes} from "api/getVendorComments";
import {createPaginationParams} from "utils/utils";

function RestaurantCommentPage() {
  return (
    <RestaurantCommentDataProvider>
      <RestaurantComment />
    </RestaurantCommentDataProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({params, query}) => {
  const queryClient = new QueryClient();
  const page = query?.page;
  const queryKey = [QUERY_KEY_RESTAURANT_COMMENTS, params?.id, "1"];
  const tmpQuery = {...query};
  delete tmpQuery?.id;
  let queryParams = createPaginationParams(tmpQuery);
  if (page && !Array.isArray(page) && !isNaN(+page)) {
    queryKey[2] = page;
  }
  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => getVendorComments({isServer: true, id: params?.id as string, params: queryParams}),
  });
  const queryState = queryClient.getQueryState<IGetVendorCommentsRes, {status: number}>(queryKey);
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

export default RestaurantCommentPage;
