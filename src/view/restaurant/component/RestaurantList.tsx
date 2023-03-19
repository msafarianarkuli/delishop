import React from "react";
import Link from "next/link";
import RestaurantCard from "view/restaurant/component/restaurantCard/RestaurantCard";
import {useRestaurantData} from "view/restaurant/context/RestaurantDataProvider";
import {IGetVendorsRes} from "api/getVendors";

function RestaurantList() {
  const {data, isLoading} = useRestaurantData();

  return (
    <div className="flex flex-col flex-1 px-screenSpace overflow-auto pt-[160px]">
      {isLoading ? <div>loading ...</div> : null}
      {!isLoading && !data?.vendors?.length ? <div>موردی یافت نشد</div> : null}
      <RestaurantListShow data={data} />
    </div>
  );
}

function RestaurantListShow({data}: {data?: IGetVendorsRes}) {
  return (
    <>
      {data?.vendors?.map((item) => {
        return (
          <Link key={item.id} href={`/restaurant/${item.id}`} prefetch={false}>
            <RestaurantCard
              image={item.logo}
              title={item.name}
              address={""}
              description={""}
              star={+item.rate}
              coin={item.point}
              time={item.max_sendtime}
            />
          </Link>
        );
      })}
    </>
  );
}

export default RestaurantList;
