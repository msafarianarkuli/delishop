import React from "react";
import {IconMoreInfo} from "assets/icons";
import RestaurantDetailSummary from "view/restaurantDetail/component/RestaurantDetailSummary";
import Link from "next/link";

function RestaurantDetailMoreInfo() {
  return (
    <>
      <Link href="/restaurant/info/1">
        <RestaurantDetailSummary top="اطلاعات بیشتر" bottom={<IconMoreInfo className="w-4 h-4 text-primary" />} />
      </Link>
    </>
  );
}

export default RestaurantDetailMoreInfo;
