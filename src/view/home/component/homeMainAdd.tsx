import "swiper/css/pagination";
import HomeAdsCard from "./homeAdsCard/HomeAdsCard";
import HomeTitle from "./HomeTitle";
import banner from "../../../assets/images/bannner.jpeg";

function HomeMainAdd() {
  return (
    <div>
      <div className="flex items-center justify-between px-screenSpace mt-4">
        <HomeTitle title="خرید کالای دولتی" />
        {/* <Link href="/restaurant?sort=point" className="flex items-center text-primary text-[15px] font-semibold">
          <span>نمایش همه</span>
          <IconRoundedLeft className="w-5 h-5" />
        </Link> */}
      </div>
      <HomeAdsCard
        title="همین حالا با  تخفیف خرید کنید"
        image={banner?.src}
        more="خرید"
        href="Governmental"
        id="37"
        imgPosition="object-top"
      />
    </div>
  );
}

export default HomeMainAdd;
