import OrderCompleteAddress from "view/orderComplete/component/OrderCompleteAddress";
import OrderCompletePaymentType from "view/orderComplete/component/OrderCompletePaymentType";
import OrderCompleteDiscount from "view/orderComplete/component/OrderCompleteDiscount";
import OrderCompleteReceipt from "view/orderComplete/component/OrderCompleteReceipt";
import OrderCompleteError from "view/orderComplete/component/OrderCompleteError";

function OrderCompletePartTwo() {
  return (
    <>
      <OrderCompleteAddress />
      <OrderCompletePaymentType />
      <OrderCompleteDiscount />
      <OrderCompleteError />
      <OrderCompleteReceipt />
    </>
  );
}

export default OrderCompletePartTwo;
