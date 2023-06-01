import HomeTitle from "view/home/component/HomeTitle";
import HomeAdsCard from "view/home/component/homeAdsCard/HomeAdsCard";
import img from "assets/images/ads-sell.png";

function HomeAdsSell() {
  return (
    <a href="https://delishop.me/vendor/" className="block px-screenSpace" target="_blank">
      <HomeTitle title="از فروش خود لذت ببرید" />
      <HomeAdsCard title="فروش بیشتر با دلی شاپ!" image={img.src} more="بزن بریم" />
    </a>
  );
}

export default HomeAdsSell;
