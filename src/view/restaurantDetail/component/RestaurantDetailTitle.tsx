import React from "react";
import {IconCoin} from "assets/icons";
import {useRestaurantDetailData} from "view/restaurantDetail/context/RestaurantDetailDataProvider";

function RestaurantDetailTitle() {
  const {data} = useRestaurantDetailData();

  return (
    <div className="flex items-center justify-between mb-2">
      <div>
        <span className="text-[15px] font-semibold ml-1">{data?.vendor?.name}</span>
        {/*<span className="text-[14px] font-light text-textColorLight">({data?.vendor?.address})</span>*/}
      </div>
      <div className="flex items-center inner_box">
        <IconCoin className="w-5 h-5 ml-1" />
        <span>{data?.vendor?.point}</span>
      </div>
    </div>
  );
}

export default RestaurantDetailTitle;
