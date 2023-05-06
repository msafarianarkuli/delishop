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
      {data?.vendor?.point ? (
        <div className="flex items-center">
          <IconCoin className="w-3 h-3 ml-1" />
          <span className="text-[13px] font-semibold">{data?.vendor?.point}</span>
          <span>+</span>
        </div>
      ) : null}
    </div>
  );
}

export default RestaurantDetailTitle;
