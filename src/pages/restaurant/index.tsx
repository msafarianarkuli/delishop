import Restaurant from "view/restaurant";
import RestaurantDataProvider from "view/restaurant/context/RestaurantDataProvider";

function RestaurantPage() {
  return (
    <RestaurantDataProvider>
      <Restaurant />
    </RestaurantDataProvider>
  );
}

// export const getServerSideProps: GetServerSideProps = async ({query}) => {
//   const params = createPaginationParams(query);
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery({
//     queryKey: QUERY_KEY_RESTAURANT,
//     queryFn: () => getRestaurants({isServer: true, params}),
//   });
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };

export default RestaurantPage;
