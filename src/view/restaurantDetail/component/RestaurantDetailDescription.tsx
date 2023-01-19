import React from "react";
import {IconStar} from "assets/icons";

function RestaurantDetailDescription() {
  return (
    <div className="flex items-center text-[13px]">
      <span>چلو کباب، غذای ایرانی، فست فود</span>
      <span className="mr-1">(541)</span>
      <div className="flex items-center">
        <IconStar className="w-4 h-4 text-[#FFC003] mx-1" />
        <span>4.6</span>
      </div>
    </div>
  );
}

export default RestaurantDetailDescription;
