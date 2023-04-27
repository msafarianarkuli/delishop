import Home from "view/home";
import HomeBannersDataProvider from "view/home/context/HomeBannersDataProvider";
import {GetStaticProps} from "next";
import {dehydrate, QueryClient} from "react-query";
import getBanners, {QUERY_KEY_HOME_BANNERS} from "api/getBanners";
import HomeAdsDataProvider from "view/home/context/HomeAdsDataProvider";
import getAds, {QUERY_KEY_HOME_ADS} from "api/getAds";
import HomeOrderDataProvider from "view/home/context/HomeOrderDataProvider";

export default function HomePage() {
  return (
    <HomeOrderDataProvider>
      <HomeBannersDataProvider>
        <HomeAdsDataProvider>
          <Home />
        </HomeAdsDataProvider>
      </HomeBannersDataProvider>
    </HomeOrderDataProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY_HOME_BANNERS,
    queryFn: () => getBanners(true),
  });
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY_HOME_ADS,
    queryFn: () => getAds(true),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
