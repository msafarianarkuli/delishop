import React from "react";
import {IconStar} from "assets/icons";
import {useRestaurantDetailData} from "view/restaurantDetail/context/RestaurantDetailDataProvider";

function RestaurantDetailDescription() {
  const {data} = useRestaurantDetailData();

  const rate = data?.vendor?.rate || 0;
  return (
    <div className="flex items-center text-[13px]">
      <span>{data?.vendor?.about}</span>
      <span className="mr-1">({data?.vendor?.rates_count})</span>
      <div className="flex items-center">
        <IconStar className="w-4 h-4 text-[#FFC003] mx-1" />
        <span>{+rate}</span>
      </div>
    </div>
  );
}

export default RestaurantDetailDescription;
