import React from "react";
import {IconClockSolid} from "assets/icons";
import RestaurantDetailSummaryItem from "view/restaurantDetail/component/RestaurantDetailSummaryItem";

function RestaurantDetailTime() {
  return (
    <RestaurantDetailSummaryItem
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
