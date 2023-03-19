import OrderCompleteList from "view/orderComplete/component/OrderCompleteList";
import OrderCompleteDescription from "view/orderComplete/component/OrderCompleteDescription";
import OrderCompleteDeliveryTime from "view/orderComplete/component/OrderCompleteDeliveryTime";
import OrderCompleteError from "view/orderComplete/component/OrderCompleteError";

function OrderCompletePartOne() {
  return (
    <>
      <OrderCompleteList />
      {/*<OrderCompleteSuggestion />*/}
      <OrderCompleteDescription />
      <OrderCompleteDeliveryTime />
      <OrderCompleteError />
    </>
  );
}

export default OrderCompletePartOne;
