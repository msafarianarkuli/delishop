import HomeHeader from "view/home/component/HomeHeader";
import HomeSearch from "view/home/component/HomeSearch";
import HomeCategory from "view/home/component/HomeCategory";
import HomeBest from "view/home/component/HomeBest";
import HomeGradient from "view/home/component/HomeGradient";
import HomeAdsSlider from "view/home/component/HomeAdsSlider";
import HomeBottomNavigation from "view/home/component/HomeBottomNavigation";
import HomeAdsSlider2 from "view/home/component/HomeAdsSlider2";
import HomeDeliBlog from "view/home/component/HomeDeliBlog";
import HomeAdsSell from "view/home/component/HomeAdsSell";
import HomeCoin from "view/home/component/HomeCoin";

function Home() {
  return (
    <>
      <HomeHeader />
      <HomeSearch />
      <HomeCategory />
      <HomeAdsSlider />
      <HomeBest />
      <HomeDeliBlog />
      <HomeAdsSell />
      <HomeAdsSlider2 />
      <HomeCoin />
      <div className="w-1 h-32" />
      <HomeBottomNavigation />
      <HomeGradient />
    </>
  );
}

export default Home;
