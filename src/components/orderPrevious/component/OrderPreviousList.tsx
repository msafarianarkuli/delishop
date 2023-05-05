import OrderPreviousHint from "components/orderPrevious/component/OrderPreviousHint";
import OrderPreviousListShow from "components/orderPrevious/component/OrderPreviousListShow";
import {IGetOrdersListResOrdersItems} from "types/interfaceOdrdersList";

interface IOrderPreviousList {
  color: "default" | "supermarket";
  onClickReOrder: (value: IGetOrdersListResOrdersItems) => void;
}

function OrderPreviousList(props: IOrderPreviousList) {
  const {onClickReOrder, color} = props;
  return (
    <div>
      <OrderPreviousHint />
      <OrderPreviousListShow onClickReOrder={onClickReOrder} color={color} />
    </div>
  );
}

export default OrderPreviousList;
