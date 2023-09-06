import {useHomeAdsData} from "view/home/context/HomeAdsDataProvider";
import HomeTitle from "./HomeTitle";
import Link from "next/link";
import {IconRoundedLeft} from "assets/icons";
import HomeAdsCard from "./homeAdsCard/HomeAdsCard";

function HomeAdsSwiper2() {
  const {data} = useHomeAdsData();

  return (
    <div>
      <div className="flex items-center justify-between px-screenSpace mb-5">
        <HomeTitle title="املاک دلی شاپ" />
        <Link href="/restaurant?sort=point" className="flex items-center text-primary text-[15px] font-semibold">
          <span>همه</span>
          <IconRoundedLeft className="w-5 h-5" />
        </Link>
      </div>
      <div className="flex items-center overflow-auto pb-5">
        {data?.map((item) => {
          return (
            <HomeAdsCard
              key={item.id}
              href="advertisement"
              id={item.id.toString()}
              horizontal
              title={item.title}
              image={item.main_img}
              more="مشاهده آگهی"
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeAdsSwiper2;
