import React from "react";
import {IconMoreInfo} from "assets/icons";
import RestaurantDetailSummaryItem from "view/restaurantDetail/component/RestaurantDetailSummaryItem";
import Link from "next/link";
import {useRestaurantDetailId} from "view/restaurantDetail/context/RestaurantDetailIdProvider";

function RestaurantDetailMoreInfo() {
  const {vendorId} = useRestaurantDetailId();
  return (
    <>
      <Link href={`/restaurant/info/${vendorId}`}>
        <RestaurantDetailSummaryItem top="اطلاعات بیشتر" bottom={<IconMoreInfo className="w-4 h-4 text-primary" />} />
      </Link>
    </>
  );
}

export default RestaurantDetailMoreInfo;
