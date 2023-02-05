import {BottomNavigation} from "components";
import useRestaurantNavigation from "hooks/useRestaurantNavigation";

function RestaurantSearch() {
  const data = useRestaurantNavigation("search");
  return (
    <>
      <BottomNavigation data={data} />
    </>
  );
}

export default RestaurantSearch;
