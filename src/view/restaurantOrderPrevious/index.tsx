import {RestaurantOrderAppHeader} from "components";
import RestaurantOrderPreviousReceipt from "view/restaurantOrderPrevious/component/RestaurantOrderPreviousReceipt";
import RestaurantOrderPreviousList from "view/restaurantOrderPrevious/component/RestaurantOrderPreviousList";
import RestaurantOrderPreviousReceiptProvider from "view/restaurantOrderPrevious/component/context/RestaurantOrderPreviousReceiptProvider";

function RestaurantOrderPrevious() {
  return (
    <RestaurantOrderPreviousReceiptProvider>
      <RestaurantOrderAppHeader active="previous" />
      <div className="mt-headerNormal">
        <RestaurantOrderPreviousList />
      </div>
      <RestaurantOrderPreviousReceipt />
    </RestaurantOrderPreviousReceiptProvider>
  );
}

export default RestaurantOrderPrevious;
