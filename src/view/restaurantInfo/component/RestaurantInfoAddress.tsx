import React from "react";
import {IconClockSolid, IconLocation} from "assets/icons";

function RestaurantInfoAddress() {
  return (
    <div className="px-screenSpace border-b border-borderColor text-[13px] text-textColor py-7">
      <div className="flex items-center">
        <IconLocation className="w-6 h-6 ml-1" />
        <span>بلوار کشاورز نبش خیابان 16 آذر ساختمان کمال الدین بهزاد واحد 209</span>
      </div>
      <div className="flex items-center mt-7">
        <IconClockSolid className="w-5 h-5 ml-2" />
        <span className="text-primary ml-1">باز، </span>
        <span>امروز از ساعت 8:30 تا 23:00</span>
      </div>
    </div>
  );
}

export default RestaurantInfoAddress;
