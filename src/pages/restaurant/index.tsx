import Restaurant from "view/restaurant";
import RestaurantDataProvider from "view/restaurant/context/RestaurantDataProvider";

function RestaurantPage() {
  return (
    <RestaurantDataProvider>
      <Restaurant />
    </RestaurantDataProvider>
  );
}

export default RestaurantPage;
