import {OrderActive} from "components";
import useRestaurantNavigation from "hooks/useRestaurantNavigation";

export const QUERY_KEY_RESTAURANT_ORDERS_ACTIVE = "restaurantOrdersActive";

function RestaurantOrderActive() {
  const data = useRestaurantNavigation("order");
  return (
    <OrderActive
      activeLink="/restaurant/order/active"
      previousLink="/restaurant/order/previous"
      queryKey={[QUERY_KEY_RESTAURANT_ORDERS_ACTIVE]}
      categoryId={[1]}
      color="default"
      bottomNavigationData={data}
    />
  );
}

export default RestaurantOrderActive;
