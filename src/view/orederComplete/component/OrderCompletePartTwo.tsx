import OrderCompleteAddress from "view/orederComplete/component/OrderCompleteAddress";
import OrderCompletePaymentType from "view/orederComplete/component/OrderCompletePaymentType";
import OrderCompleteDiscount from "view/orederComplete/component/OrderCompleteDiscount";
import OrderCompleteReceipt from "view/orederComplete/component/OrderCompleteReceipt";

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
