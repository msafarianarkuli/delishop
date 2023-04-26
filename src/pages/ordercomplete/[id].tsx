import OrderComplete from "view/orderComplete";
import OrderCompleteProvider from "view/orderComplete/context/OrderCompleteProvider";
import OrderCompleteAddressProvider from "view/orderComplete/context/OrderCompleteAddressProvider";
import LogisticPriceProvider from "context/LogisticPriceProvider";
import OrderCompleteVendorDetailDataProvider from "view/orderComplete/context/OrderCompleteVendorDetailDataProvider";

function OrderCompletePage() {
  return (
    <OrderCompleteVendorDetailDataProvider>
      <OrderCompleteProvider>
        <OrderCompleteAddressProvider>
          <LogisticPriceProvider>
            <OrderComplete />
          </LogisticPriceProvider>
        </OrderCompleteAddressProvider>
      </OrderCompleteProvider>
    </OrderCompleteVendorDetailDataProvider>
  );
}

export default OrderCompletePage;
