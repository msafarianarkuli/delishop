import RestaurantOrderRate from "view/restaurantOrderRate";
import RestaurantOrderRateDataProvider from "view/restaurantOrderRate/context/RestaurantOrderRateDataProvider";

function RestaurantOrderRatePage() {
  return (
    <RestaurantOrderRateDataProvider>
      <RestaurantOrderRate />
    </RestaurantOrderRateDataProvider>
  );
}

export default RestaurantOrderRatePage;
