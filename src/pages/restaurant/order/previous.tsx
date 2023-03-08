import RestaurantOrderPrevious from "view/restaurantOrderPrevious";
import RestaurantOrderPreviousDataProvider from "view/restaurantOrderPrevious/component/context/RestaurantOrderPreviousDataProvider";

function RestaurantOrderPreviousPage() {
  return (
    <RestaurantOrderPreviousDataProvider>
      <RestaurantOrderPrevious />
    </RestaurantOrderPreviousDataProvider>
  );
}

export default RestaurantOrderPreviousPage;
