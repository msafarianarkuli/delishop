import styles from "view/orderComplete/orderComplete.module.scss";
import {Checkbox} from "components";
import OrderCompleteTitle from "view/orderComplete/component/OrderCompleteTitle";
import {useCallback, useEffect} from "react";
import useTypeColor from "hooks/useTypeColor";
import {
  IOrderCompleteDeliverTime,
  setOrderCompleteDeliveryTime,
  useOrderComplete,
  useOrderCompleteAction,
} from "view/orderComplete/context/OrderCompleteProvider";
import {useOrderCompleteVendorDetailData} from "view/orderComplete/context/OrderCompleteVendorDetailDataProvider";
import useVendorWorkTime from "hooks/useVendorWorkTime";

function OrderCompleteDeliveryTime() {
  const type = useTypeColor();
  const {deliveryTime} = useOrderComplete();
  const dispatch = useOrderCompleteAction();
  const {data, isLoading} = useOrderCompleteVendorDetailData();
  const {time, error} = useVendorWorkTime({open_hours: data?.open_hours});

  useEffect(() => {
    if (time.length && !deliveryTime) {
      dispatch(setOrderCompleteDeliveryTime(time[0]));
    }
  }, [deliveryTime, dispatch, time]);

  const label = useCallback((item: IOrderCompleteDeliverTime) => {
    if (item.isTemp) {
      return <span>تحویل فوری</span>;
    }
    return (
      <>
        <span>{item.from}</span>
        <span className="mx-1">تا</span>
        <span>{item.to}</span>
      </>
    );
  }, []);

  return (
    <div className="mt-7">
      <OrderCompleteTitle type={type} title="زمان تحویل" />
      <div className="px-screenSpace">
        <div className={styles.restaurant_complete_delivery_time_container}>
          {isLoading ? <div>در حال دریافت اطلاعات ...</div> : null}
          {error ? <div>{error}</div> : null}
          {time.map((item, index) => {
            return (
              <Checkbox
                key={index}
                id={item.from.toString()}
                type="radio"
                classNameContainer="mb-5 last:mb-0"
                classNameLabel="mr-2"
                label={label(item)}
                value={
                  index === 0
                    ? !!deliveryTime?.isTemp && deliveryTime?.from === item.from
                    : !deliveryTime?.isTemp && deliveryTime?.from === item.from
                }
                onChange={() => {
                  dispatch(setOrderCompleteDeliveryTime(item));
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OrderCompleteDeliveryTime;
