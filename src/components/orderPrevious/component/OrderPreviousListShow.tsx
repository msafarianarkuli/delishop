import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {
  setOrderPreviousReceiptData,
  useOrderPreviousReceiptAction,
} from "components/orderPrevious/context/OrderPreviousReceiptProvider";
import {useOrderPreviousData} from "components/orderPrevious/context/OrderPreviousDataProvider";
import OrderPreviousCard from "components/orderPrevious/component/orderPreviousCard";
import {IGetOrdersListResOrdersItems} from "types/interfaceOdrdersList";

interface IOrderPreviousListShow {
  color: "default" | "supermarket";
  onClickReOrder: (value: IGetOrdersListResOrdersItems) => void;
}

function OrderPreviousListShow(props: IOrderPreviousListShow) {
  const {color, onClickReOrder} = props;
  const dispatch = useOrderPreviousReceiptAction();
  const {data, fetchNextPage} = useOrderPreviousData();
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <>
      {data?.pages.map((value, index, array) => {
        return value.orders.map((item, idx, arr) => {
          const condition = array.length - 1 === index && arr.length - 1 === idx;
          const tmpRef = condition ? ref : null;
          return (
            <div key={item.id} ref={tmpRef}>
              <OrderPreviousCard
                color={color}
                key={item.id}
                id={item.id.toString()}
                title={item.vendor.name}
                receiptNumber={item.id}
                image={item.vendor.logo}
                deliveryTitle={item.address.title || ""}
                coin={15}
                orderStatus={item.orderstatus}
                date={item.created_at}
                orders={item.productKinds}
                totalPrice={Math.round(item.topayprice / 10)}
                hasRated={!!item.rate}
                onClickReceipt={() => {
                  dispatch(
                    setOrderPreviousReceiptData({
                      data: item.productKinds,
                      totalPrice: item.topayprice,
                    })
                  );
                }}
                onClickReOrder={() => onClickReOrder(item)}
              />
            </div>
          );
        });
      })}
    </>
  );
}

export default OrderPreviousListShow;
