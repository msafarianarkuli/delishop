import {BottomPageGradient, ProfileMainTabRoute} from "components";
import HomeAdsSell from "../HomeAdsSell";
import HomeAdsSwiper from "../HomeAdsSwiper";
import HomeAdsSwiper2 from "../HomeAdsSwiper2";
import HomeBest from "../HomeBest";
// import HomeBottomNavigation from "../HomeBottomNavigation";
import HomeCategory from "../HomeCategory";
import HomeCoin from "../HomeCoin";
import HomeDeliBlog from "../HomeDeliBlog";
import HomeHeader from "../HomeHeader";
import HomeOrder from "../HomeOrder";
import HomeUp from "../HomeUp";
import HomeMainAdd from "../homeMainAdd";
import {IBlog} from "types/interfaceBlog";
import VendorBestRestuarantDataProvider from "view/home/context/HomeBestRestaurant";

interface IHomeAuthenticated {
  blogs: IBlog[];
}

const HomeAuthenticated = (props: IHomeAuthenticated) => {
  const {blogs} = props;
  return (
    <>
      <HomeHeader />
      <ProfileMainTabRoute active="home" />
      <HomeOrder />
      <HomeCategory />
      <HomeMainAdd />
      <VendorBestRestuarantDataProvider>
        <HomeBest />
      </VendorBestRestuarantDataProvider>
      <HomeAdsSwiper />
      <HomeDeliBlog blogs={blogs} />
      <HomeAdsSell />
      <HomeAdsSwiper2 />
      <HomeCoin />
      <HomeUp />
      {/* <HomeBottomNavigation /> */}
      <BottomPageGradient />
    </>
  );
};

export default HomeAuthenticated;
