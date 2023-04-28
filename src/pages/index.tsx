import Home from "view/home";
import HomeBannersDataProvider from "view/home/context/HomeBannersDataProvider";
import {GetStaticProps} from "next";
import {dehydrate, QueryClient} from "react-query";
import getBanners, {QUERY_KEY_HOME_BANNERS} from "api/getBanners";
import HomeAdsDataProvider from "view/home/context/HomeAdsDataProvider";
import getAds, {QUERY_KEY_HOME_ADS} from "api/getAds";
import HomeOrderDataProvider from "view/home/context/HomeOrderDataProvider";
import HomeBestDataProvider, {QUERY_KEY_HOME_BEST} from "view/home/context/HomeBestDataProvider";
import getVendors from "api/getVendors";

export default function HomePage() {
  return (
    <HomeOrderDataProvider>
      <HomeBestDataProvider>
        <HomeBannersDataProvider>
          <HomeAdsDataProvider>
            <Home />
          </HomeAdsDataProvider>
        </HomeBannersDataProvider>
      </HomeBestDataProvider>
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
  await queryClient.prefetchInfiniteQuery({
    queryKey: QUERY_KEY_HOME_BEST,
    queryFn: () => getVendors({isServer: true, params: {"category[]": 1, sort: "point"}}),
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 60,
  };
};
