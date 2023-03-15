import OrderComplete from "view/orderComplete";
import OrderCompleteProvider from "view/orderComplete/context/OrderCompleteProvider";
import OrderCompleteAddressProvider from "view/orderComplete/context/OrderCompleteAddressProvider";

function OrderCompletePage() {
  return (
    <OrderCompleteProvider>
      <OrderCompleteAddressProvider>
        <OrderComplete />
      </OrderCompleteAddressProvider>
    </OrderCompleteProvider>
  );
}

export default OrderCompletePage;
