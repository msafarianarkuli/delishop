import OrderComplete from "view/orderComplete";
import OrderCompleteProvider from "view/orderComplete/context/OrderCompleteProvider";
import OrderCompleteAddressProvider from "view/orderComplete/context/OrderCompleteAddressProvider";
import LogisticPriceProvider from "context/LogisticPriceProvider";

function OrderCompletePage() {
  return (
    <OrderCompleteProvider>
      <OrderCompleteAddressProvider>
        <LogisticPriceProvider>
          <OrderComplete />
        </LogisticPriceProvider>
      </OrderCompleteAddressProvider>
    </OrderCompleteProvider>
  );
}

export default OrderCompletePage;
