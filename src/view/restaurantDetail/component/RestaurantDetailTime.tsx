import React from "react";
import {IconClockSolid} from "assets/icons";
import RestaurantDetailSummary from "view/restaurantDetail/component/RestaurantDetailSummary";

function RestaurantDetailTime() {
  return (
    <RestaurantDetailSummary
      top="تا 40 دقیقه"
      bottom={
        <>
          <IconClockSolid className="w-4 h-4" />
          <span className="mr-1">زمان تحویل</span>
        </>
      }
    />
  );
}

export default RestaurantDetailTime;
