import React from "react";
import IconDelivery from "assets/icons/IconDelivery";
import RestaurantDetailSummaryItem from "view/restaurantDetail/component/RestaurantDetailSummaryItem";

function RestaurantDetailDelivery() {
  return (
    <RestaurantDetailSummaryItem
      classNameContainer="px-5 mx-5 after:content-[' '] after:absolute after:bg-textColor after:left-0 after:h-[25px] after:w-[1px] before:content-[' '] before:absolute before:bg-textColor before:right-0 before:h-[25px] before:w-[1px]"
      top={
        <>
          <span>{(7000).toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </>
      }
      bottom={
        <>
          <IconDelivery className="w-4 h-4" />
          <span className="mr-1">ارسال رستوران</span>
        </>
      }
    />
  );
}

export default RestaurantDetailDelivery;
