import Home from "view/home";
import HomeBannersDataProvider from "view/home/context/HomeBannersDataProvider";
import {GetStaticProps} from "next";
import {dehydrate, QueryClient} from "react-query";
import getBanners, {QUERY_KEY_HOME_BANNERS} from "api/getBanners";

export default function HomePage() {
  return (
    <HomeBannersDataProvider>
      <Home />
    </HomeBannersDataProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY_HOME_BANNERS,
    queryFn: () => getBanners(true),
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
