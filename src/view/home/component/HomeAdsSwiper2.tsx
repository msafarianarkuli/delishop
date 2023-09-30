import {useHomeAdsData} from "view/home/context/HomeAdsDataProvider";
import HomeTitle from "./HomeTitle";
import Link from "next/link";
import {IconRoundedLeft} from "assets/icons";
import HomeRealStateCard from "./homeAdsCard/HomeRealStateCard";

function HomeAdsSwiper2() {
  const {data} = useHomeAdsData();
  console.log(data, "realstatee");
  return (
    <div>
      <div className="flex items-center justify-between px-screenSpace mt-8">
        <HomeTitle title="املاک دلی شاپ" />
        <Link href="/advertisement" className="flex items-center text-primary text-[15px] font-semibold">
          <span>نمایش همه</span>
          <IconRoundedLeft className="w-5 h-5" />
        </Link>
      </div>
      <div className="flex items-center overflow-auto">
        {data?.map((item) => {
          return (
            <HomeRealStateCard
              key={item.id}
              href="advertisement"
              id={item.id.toString()}
              horizontal
              title={item.title}
              image={item.main_img}
              price={item.price}
              more="مشاهده "
              date={item.created_at}
              status={item.status}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeAdsSwiper2;
