import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {
  setOrderPreviousReceiptClose,
  useOrderPreviousReceipt,
  useOrderPreviousReceiptAction,
} from "components/orderPrevious/context/OrderPreviousReceiptProvider";
import {BottomSheet} from "components/index";
import classNames from "classnames";

interface IOrderPreviousReceipt {
  color: "default" | "supermarket";
}

function OrderPreviousReceipt(props: IOrderPreviousReceipt) {
  const {color} = props;
  const {open, data} = useOrderPreviousReceipt();
  const dispatch = useOrderPreviousReceiptAction();
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      const element = document.getElementsByClassName("ant-drawer-body");
      if (element.length) {
        element[0].scrollTo({top: 0});
      }
    }
  }, [open]);

  const onClose = useCallback(() => {
    dispatch(setOrderPreviousReceiptClose());
  }, [dispatch]);

  useEffect(() => {
    const div = ref.current as HTMLDivElement;
    if (div.scrollHeight) {
      const tmpHeight = div.scrollHeight + 90;
      setHeight(Math.min(tmpHeight, 400));
    }
  }, [data]);

  return (
    <>
      <div ref={ref} className="fixed -right-[100%]">
        <OrderPreviousReceiptItems color={color} />
      </div>
      <BottomSheet open={open} onClose={onClose} height={height} title="فاکتور">
        <OrderPreviousReceiptItems color={color} />
      </BottomSheet>
    </>
  );
}

export default OrderPreviousReceipt;

interface IOrderPreviousReceiptItems {
  color: "default" | "supermarket";
}

function OrderPreviousReceiptItems(props: IOrderPreviousReceiptItems) {
  const {color} = props;
  const {data, totalPrice} = useOrderPreviousReceipt();

  const totalOrder = useMemo(() => {
    if (data.length) {
      return data.reduce((arr, current) => {
        return arr + current.price_prc * current.count_num;
      }, 0);
    }
    return 0;
  }, [data]);

  const deliveryPrice = useMemo(() => {
    if (totalOrder && totalPrice) {
      return totalPrice - totalOrder;
    }
    return 0;
  }, [totalOrder, totalPrice]);

  const primaryText = classNames({
    "text-primary": color === "default",
    "text-primarySupermarket": color === "supermarket",
  });

  return (
    <>
      <div>
        {data?.map((item, index) => {
          return (
            <div key={index} className="flex items-center justify-between mb-5 first:mt-5 text-[15px] font-medium">
              <div>
                <span>{item.product.displayname}</span>
                {item.count_num > 1 ? <span className="mr-1">({item.count_num})</span> : null}
              </div>
              <div>
                <span>{Math.round((item.price_prc * item.count_num) / 10).toLocaleString("en-US")}</span>
                <span className="mr-1 text-[13px]">تومان</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between mb-5 text-[15px] font-medium">
        <div className={primaryText}>مجموع سفارش</div>
        <div>
          <span>{Math.round(totalOrder / 10).toLocaleString("en-US")}</span>
          <span className="mr-1 text-[13px]">تومان</span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-5 text-[15px] font-medium">
        <div>هزینه ارسال</div>
        <div>
          <span>{Math.round(deliveryPrice / 10).toLocaleString("en-US")}</span>
          <span className="mr-1 text-[13px]">تومان</span>
        </div>
      </div>
      <div className="flex items-center justify-between pt-5 text-[15px] font-medium border-t border-borderColor">
        <div className={primaryText}>جمع کل</div>
        <div>
          <span>{Math.round(totalPrice / 10).toLocaleString("en-US")}</span>
          <span className="mr-1 text-[13px]">تومان</span>
        </div>
      </div>
    </>
  );
}
