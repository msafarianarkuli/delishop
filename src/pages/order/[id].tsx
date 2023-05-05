import OrderDetailDataProvider from "view/orderDetail/context/OrderDetailDataProvider";
import OrderDetail from "view/orderDetail";

function OrderDetailPage() {
  return (
    <OrderDetailDataProvider>
      <OrderDetail />
    </OrderDetailDataProvider>
  );
}

export default OrderDetailPage;
