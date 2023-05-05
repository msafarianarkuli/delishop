import OrderRate from "view/orderRate";
import OrderRateDataProvider from "view/orderRate/context/OrderRateDataProvider";

function OrderRatePage() {
  return (
    <OrderRateDataProvider>
      <OrderRate />
    </OrderRateDataProvider>
  );
}

export default OrderRatePage;
