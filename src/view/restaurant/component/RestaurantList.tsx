import React from "react";
import Link from "next/link";
import RestaurantCard from "view/restaurant/component/restaurantCard/RestaurantCard";
import {useRestaurantData} from "view/restaurant/context/RestaurantDataProvider";

function RestaurantList() {
  const {data} = useRestaurantData();

  return (
    <div className="flex flex-col flex-1 px-screenSpace overflow-auto pt-[160px]">
      {data?.vendors?.map((item) => {
        return (
          <Link key={item.id} href={`/restaurant/${item.id}`}>
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
    </div>
  );
}

export default RestaurantList;
