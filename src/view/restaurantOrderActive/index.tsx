import {BottomNavigation, RestaurantOrderAppHeader} from "components";
import useRestaurantNavigation from "hooks/useRestaurantNavigation";
import RestaurantOrderActiveList from "view/restaurantOrderActive/component/RestaurantOrderActiveList";

function RestaurantOrderActive() {
  const data = useRestaurantNavigation("order");
  return (
    <>
      <RestaurantOrderAppHeader active="active" />
      <div className="mt-headerNormal px-[10px] mb-bottomNavigation">
        <RestaurantOrderActiveList />
      </div>
      <BottomNavigation data={data} />
    </>
  );
}

export default RestaurantOrderActive;
