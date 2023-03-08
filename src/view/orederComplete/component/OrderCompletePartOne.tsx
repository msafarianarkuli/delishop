import OrderCompleteList from "view/orederComplete/component/OrderCompleteList";
import OrderCompleteSuggestion from "view/orederComplete/component/OrderCompleteSuggestion";
import OrderCompleteDescription from "view/orederComplete/component/OrderCompleteDescription";
import OrderCompleteDeliveryTime from "view/orederComplete/component/OrderCompleteDeliveryTime";

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
