import RestaurantHeader from "view/restaurant/component/RestaurantHeader";
import RestaurantFilter from "view/restaurant/component/RestaurantFilter";
import RestaurantSort from "view/restaurant/component/RestaurantSort";

function Restaurant() {
  return (
    <div>
      <RestaurantHeader />
      <RestaurantFilter />
      <RestaurantSort />
    </div>
  );
}

export default Restaurant;
