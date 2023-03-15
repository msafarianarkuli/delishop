import OrderComplete from "view/orderComplete";
import OrderCompleteProvider from "view/orderComplete/context/OrderCompleteProvider";

function OrderCompletePage() {
  return (
    <OrderCompleteProvider>
      <OrderComplete />
    </OrderCompleteProvider>
  );
}

export default OrderCompletePage;
