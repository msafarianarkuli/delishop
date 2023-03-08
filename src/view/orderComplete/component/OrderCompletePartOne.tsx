import OrderCompleteList from "view/orderComplete/component/OrderCompleteList";
import OrderCompleteSuggestion from "view/orderComplete/component/OrderCompleteSuggestion";
import OrderCompleteDescription from "view/orderComplete/component/OrderCompleteDescription";
import OrderCompleteDeliveryTime from "view/orderComplete/component/OrderCompleteDeliveryTime";

function OrderCompletePartOne() {
  return (
    <>
      <OrderCompleteList />
      <OrderCompleteSuggestion />
      <OrderCompleteDescription />
      <OrderCompleteDeliveryTime />
    </>
  );
}

export default OrderCompletePartOne;
