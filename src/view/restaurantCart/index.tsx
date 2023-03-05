import RestaurantCartHeader from "view/restaurantCart/component/RestaurantCartHeader";
import {BottomNavigation} from "components";
import useRestaurantNavigation from "hooks/useRestaurantNavigation";
import RestaurantCartList from "view/restaurantCart/component/RestaurantCartList";

function RestaurantCart() {
  const data = useRestaurantNavigation("cart");

  return (
    <>
      <RestaurantCartHeader />
      <div className="px-screenSpace mt-headerNormal mb-bottomNavigation">
        <RestaurantCartList />
      </div>
      <BottomNavigation data={data} />
    </>
  );
}

export default RestaurantCart;
