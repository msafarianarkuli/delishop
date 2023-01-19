import React from "react";
import {IconMoreInfo} from "assets/icons";
import RestaurantDetailSummary from "view/restaurantDetail/component/RestaurantDetailSummary";

function RestaurantDetailMoreInfo() {
  return <RestaurantDetailSummary top="اطلاعات بیشتر" bottom={<IconMoreInfo className="w-4 h-4 text-primary" />} />;
}

export default RestaurantDetailMoreInfo;
