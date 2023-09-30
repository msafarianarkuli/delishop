import HomeVendorCard from "view/home/component/homeVendorCard/HomeVendorCard";
import {IconRoundedLeft} from "assets/icons";
import HomeTitle from "view/home/component/HomeTitle";
import Link from "next/link";
import {restaurantsVendorIds} from "utils/Const";
import {useVendorBestRestuarantData} from "../context/HomeBestRestaurant";

function HomeBest() {
  const {data} = useVendorBestRestuarantData();

  if (!data || !data.pages[0].vendors.length) return null;
  return (
    <div>
      <div className="flex items-center justify-between px-screenSpace mb-5">
        <HomeTitle title="برترین رستوران ها" />
        <Link href="/restaurant?sort=point" className="flex items-center text-primary text-[15px] font-semibold">
          <span>نمایش همه</span>
          <IconRoundedLeft className="w-5 h-5" />
        </Link>
      </div>
      <div className="flex items-center overflow-auto pb-5">
        {data.pages.map((value) => {
          return value.vendors.map((item) => {
            return (
              <Link
                key={item.id}
                href={`${
                  restaurantsVendorIds.includes(item.vendor_category_id)
                    ? `/restaurant/${item.id}`
                    : `/supermarket/${item.id}`
                }`}
                prefetch={false}
              >
                <HomeVendorCard
                  image={item.banner}
                  title={item.name}
                  description={item.about}
                  star={+item.rate}
                  time={item.max_sendtime}
                  coin={item.point}
                  lat={item.lat}
                  long={item.long}
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
