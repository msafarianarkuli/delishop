import {OrderAppHeader} from "components";
import RestaurantOrderPreviousReceipt from "view/restaurantOrderPrevious/component/RestaurantOrderPreviousReceipt";
import RestaurantOrderPreviousList from "view/restaurantOrderPrevious/component/RestaurantOrderPreviousList";
import RestaurantOrderPreviousReceiptProvider from "view/restaurantOrderPrevious/component/context/RestaurantOrderPreviousReceiptProvider";

function RestaurantOrderPrevious() {
  return (
    <RestaurantOrderPreviousReceiptProvider>
      <OrderAppHeader
        active="previous"
        activeLink="/restaurant/order/active"
        previousLink="/restaurant/order/previous"
      />
      <div className="mt-headerNormal">
        <RestaurantOrderPreviousList />
      </div>
      <RestaurantOrderPreviousReceipt />
    </RestaurantOrderPreviousReceiptProvider>
  );
}

export default RestaurantOrderPrevious;
