import useSupermarketNavigation from "hooks/useSupermarketNavigation";
import {OrderActive} from "components";

export const QUERY_KEY_SUPERMARKET_ORDERS_ACTIVE = "supermarketOrdersActive";

function SupermarketOrderActive() {
  const data = useSupermarketNavigation("order");
  return (
    <OrderActive
      activeLink="/supermarket/order/active"
      previousLink="/supermarket/order/previous"
      queryKey={[QUERY_KEY_SUPERMARKET_ORDERS_ACTIVE]}
      categoryId={[2]}
      color="supermarket"
      bottomNavigationData={data}
    />
  );
}

export default SupermarketOrderActive;
