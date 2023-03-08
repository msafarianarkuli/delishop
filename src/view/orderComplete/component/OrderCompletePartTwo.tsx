import OrderCompleteAddress from "view/orderComplete/component/OrderCompleteAddress";
import OrderCompletePaymentType from "view/orderComplete/component/OrderCompletePaymentType";
import OrderCompleteDiscount from "view/orderComplete/component/OrderCompleteDiscount";
import OrderCompleteReceipt from "view/orderComplete/component/OrderCompleteReceipt";

function OrderCompletePartTwo() {
  return (
    <>
      <OrderCompleteAddress />
      <OrderCompletePaymentType />
      <OrderCompleteDiscount />
      <OrderCompleteReceipt />
    </>
  );
}

export default OrderCompletePartTwo;
