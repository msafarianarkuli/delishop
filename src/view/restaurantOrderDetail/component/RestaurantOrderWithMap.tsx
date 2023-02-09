import {Map} from "components";
import RestaurantOrderFloatPage from "view/restaurantOrderDetail/component/RestaurantOrderFloatPage";

function RestaurantOrderWithMap() {
  return (
    <div className="relative">
      <Map className="w-full h-screen" />
      <RestaurantOrderFloatPage />
    </div>
  );
}

export default RestaurantOrderWithMap;
