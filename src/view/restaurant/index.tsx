import RestaurantHeader from "view/restaurant/component/RestaurantHeader";
import RestaurantFilter from "view/restaurant/component/RestaurantFilter";
import RestaurantSort from "view/restaurant/component/RestaurantSort";
import {BottomNavigation} from "components";
import useRestaurantNavigation from "hooks/useRestaurantNavigation";
import RestaurantList from "view/restaurant/component/RestaurantList";

function Restaurant() {
  const data = useRestaurantNavigation();
  return (
    <>
      <div className="fixed z-10 top-0 right-0 left-0 header_background">
        <RestaurantHeader />
        <RestaurantFilter />
        <RestaurantSort />
      </div>
      <RestaurantList />
      <div className="w-full h-bottomNavigation" />
      <BottomNavigation data={data} />
    </>
  );
}

export default Restaurant;
