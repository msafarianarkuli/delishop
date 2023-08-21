// import { GetStaticProps } from "next";
// import { QueryClient } from "react-query";
import Advertisement from "view/advertisement";
import AdvertisementDataProvider from "view/advertisement/context/AdvertisementDataProvider";

const AdvertisementListPage = () => {
  return (
    <AdvertisementDataProvider>
      <Advertisement />
    </AdvertisementDataProvider>
  );
};

export default AdvertisementListPage;

// export const getStaticProps: GetStaticProps = async () => {

//   await QueryClient.prefetchQuery({
//     queryKey: QUERY_KEY_HOME_ADS,
//     queryFn: () => getAds(true),
//   });

//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//     revalidate: 60,
//   };
// };
