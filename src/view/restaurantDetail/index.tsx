import React from "react";
import RestaurantDetailImageHeader from "view/restaurantDetail/component/RestaurantDetailImageHeader";
import RestaurantDetailTitle from "view/restaurantDetail/component/RestaurantDetailTitle";
import RestaurantDetailDescription from "view/restaurantDetail/component/RestaurantDetailDescription";
import RestaurantDetailTime from "view/restaurantDetail/component/RestaurantDetailTime";
import RestaurantDetailDelivery from "view/restaurantDetail/component/RestaurantDetailDelivery";
import RestaurantDetailMoreInfo from "view/restaurantDetail/component/RestaurantDetailMoreInfo";

function RestaurantDetail() {
  return (
    <>
      <RestaurantDetailImageHeader />
      <div className="pt-6 pb-5 border-b border-borderColor px-screenSpace">
        <RestaurantDetailTitle />
        <RestaurantDetailDescription />
      </div>
      <div className="flex items-center justify-center py-5 border-b border-borderColor px-screenSpace">
        <RestaurantDetailTime />
        <RestaurantDetailDelivery />
        <RestaurantDetailMoreInfo />
      </div>
    </>
  );
}

export default RestaurantDetail;
