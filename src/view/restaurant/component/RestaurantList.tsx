import React from "react";
import Link from "next/link";
import RestaurantCard from "view/restaurant/component/restaurantCard/RestaurantCard";
import {useRestaurantData} from "view/restaurant/context/RestaurantDataProvider";
import {IGetVendorsRes} from "api/getVendors";
import {InfiniteData} from "react-query";

function RestaurantList() {
  const {data, isLoading} = useRestaurantData();

  return (
    <div className="flex flex-col flex-1 px-screenSpace overflow-auto pt-[160px]">
      {isLoading ? <div>loading ...</div> : null}
      {!isLoading && !data?.pages?.length ? <div>موردی یافت نشد</div> : null}
      <RestaurantListShow data={data} />
    </div>
  );
}

function RestaurantListShow({data}: {data?: InfiniteData<IGetVendorsRes>}) {
  return (
    <>
      {data?.pages?.map((value) => {
        return value.vendors.map((item) => {
          return (
            <Link key={item.id} href={`/restaurant/${item.id}`} prefetch={false}>
              <RestaurantCard
                image={item.logo}
                title={item.name}
                description={item.about}
                star={+item.rate}
                coin={item.point}
                time={item.max_sendtime}
              />
            </Link>
          );
        });
      })}
    </>
  );
}

export default RestaurantList;
