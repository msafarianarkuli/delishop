import HomeVendorCard from "view/home/component/homeVendorCard/HomeVendorCard";
import {IconRoundedLeft} from "assets/icons";
import HomeTitle from "view/home/component/HomeTitle";
import {useHomeBestData} from "view/home/context/HomeBestDataProvider";
import Link from "next/link";

function HomeBest() {
  const {data} = useHomeBestData();
  if (!data || !data.pages[0].vendors.length) return null;
  return (
    <div>
      <div className="flex items-center justify-between px-screenSpace mb-5">
        <HomeTitle title="برترین ها" />
        <Link href="/restaurant_old?sort=point" className="flex items-center text-primary text-[15px] font-semibold">
          <span>همه</span>
          <IconRoundedLeft className="w-5 h-5" />
        </Link>
      </div>
      <div className="flex items-center overflow-auto pb-5">
        {data.pages.map((value) => {
          return value.vendors.map((item) => {
            return (
              <Link key={item.id} href={`/restaurant/${item.id}`} prefetch={false}>
                <HomeVendorCard
                  image={item.banner}
                  title={item.name}
                  description={item.about}
                  star={+item.rate}
                  time={item.max_sendtime}
                  coin={item.point}
                />
              </Link>
            );
          });
        })}
      </div>
    </div>
  );
}

export default HomeBest;
