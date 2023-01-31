import RestaurantCompleteAddress from "view/restaurantComplete/component/RestaurantCompleteAddress";
import RestaurantCompletePaymentType from "view/restaurantComplete/component/RestaurantCompletePaymentType";
import RestaurantCompleteDiscount from "view/restaurantComplete/component/RestaurantCompleteDiscount";
import RestaurantCompleteReceipt from "view/restaurantComplete/component/RestaurantCompleteReceipt";

function RestaurantCompletePartTwo() {
  return (
    <>
      <RestaurantCompleteAddress />
      <RestaurantCompletePaymentType />
      <RestaurantCompleteDiscount />
      <RestaurantCompleteReceipt />
    </>
  );
}

export default RestaurantCompletePartTwo;
