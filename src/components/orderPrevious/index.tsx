import OrderPreviousDataProvider from "components/orderPrevious/context/OrderPreviousDataProvider";
import {OrderAppHeader} from "components/index";
import OrderPreviousList from "components/orderPrevious/component/OrderPreviousList";
import OrderPreviousReceiptProvider from "components/orderPrevious/context/OrderPreviousReceiptProvider";
import OrderPreviousReceipt from "components/orderPrevious/component/OrderPreviousReceipt";
import {IGetOrdersListResOrdersItems} from "types/interfaceOdrdersList";

interface IOrderPrevious {
  activeLink: string;
  previousLink: string;
  queryKey: string;
  color: "default" | "supermarket";
  categoryId: number[];
  onClickReOrder: (value: IGetOrdersListResOrdersItems) => void;
}

function OrderPrevious(props: IOrderPrevious) {
  const {queryKey, categoryId, previousLink, activeLink, color, onClickReOrder} = props;
  return (
    <OrderPreviousDataProvider categoryId={categoryId} queryKey={queryKey}>
      <OrderPreviousReceiptProvider>
        <OrderAppHeader color={color} active="previous" activeLink={activeLink} previousLink={previousLink} />
        <div className="mt-headerNormal">
          <OrderPreviousList color={color} onClickReOrder={onClickReOrder} />
        </div>
        <OrderPreviousReceipt color={color} />
      </OrderPreviousReceiptProvider>
    </OrderPreviousDataProvider>
  );
}

export default OrderPrevious;
