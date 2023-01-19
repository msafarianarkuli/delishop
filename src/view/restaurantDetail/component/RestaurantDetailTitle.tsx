import React from "react";
import {IconCoin} from "assets/icons";

function RestaurantDetailTitle() {
  return (
    <div className="flex items-center justify-between mb-2">
      <div>
        <span className="text-[15px] font-semibold ml-1">رستوران آریایی</span>
        <span className="text-[14px] font-light text-textColorLight">(وردآورد)</span>
      </div>
      <div className="flex items-center inner_box">
        <IconCoin className="w-5 h-5 ml-1" />
        <span>15</span>
      </div>
    </div>
  );
}

export default RestaurantDetailTitle;
