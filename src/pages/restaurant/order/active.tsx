import RestaurantOrderActive from "view/restaurantOrderActive";
import RestaurantOrderActiveDataProvider from "view/restaurantOrderActive/context/RestaurantOrderActiveDataProvider";

function RestaurantOrderActivePage() {
  return (
    <RestaurantOrderActiveDataProvider>
      <RestaurantOrderActive />
    </RestaurantOrderActiveDataProvider>
  );
}

export default RestaurantOrderActivePage;
