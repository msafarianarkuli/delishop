import styles from "view/orderComplete/orderComplete.module.scss";
import {Checkbox} from "components";
import OrderCompleteTitle from "view/orderComplete/component/OrderCompleteTitle";
import {useCallback, useEffect, useState} from "react";
import {number2Digits} from "utils/utils";
import useTypeColor from "hooks/useTypeColor";
import {
  IOrderCompleteDeliverTime,
  setOrderCompleteDeliveryTime,
  useOrderComplete,
  useOrderCompleteAction,
} from "view/orderComplete/context/OrderCompleteProvider";

const tmpTime: IOrderCompleteDeliverTime[] = Array.from(new Array(15), (_, i) => {
  const tmp = 8 + i;
  return {
    from: tmp,
    to: tmp + 1,
  };
});

function OrderCompleteDeliveryTime() {
  const type = useTypeColor();
  const [time, setTime] = useState<IOrderCompleteDeliverTime[]>([]);
  const {deliveryTime} = useOrderComplete();
  const dispatch = useOrderCompleteAction();

  useEffect(() => {
    const todayHour = new Date().getHours();
    const todayMin = new Date().getMinutes();
    let index = -1;
    if (todayHour !== 0) {
      index = tmpTime.findIndex((item) => {
        if (todayMin > 30) {
          return item.from > todayHour;
        } else {
          return item.from >= todayHour;
        }
      });
    }
    if (index !== -1) {
      let tmp = tmpTime.slice(index);
      if (tmp.length) {
        tmp = [{isTemp: true, ...tmp[0]}, ...tmp];
      }
      setTime(tmp);
    } else {
      setTime([]);
    }
  }, []);

  useEffect(() => {
    if (time.length && !deliveryTime) {
      dispatch(setOrderCompleteDeliveryTime(time[0]));
    }
  }, [deliveryTime, dispatch, time]);

  const label = useCallback((from: number, to: number, index: number) => {
    if (!index) {
      return <span>تحویل فوری</span>;
    }
    return (
      <>
        <span>{number2Digits(from) + ":00"}</span>
        <span className="mx-1">تا</span>
        <span>{number2Digits(to) + ":00"}</span>
      </>
    );
  }, []);

  return (
    <div className="mt-7">
      <OrderCompleteTitle type={type} title="زمان تحویل" />
      <div className="px-screenSpace">
        <div className={styles.restaurant_complete_delivery_time_container}>
          {time.map((item, index) => {
            return (
              <Checkbox
                key={index}
                id={item.from.toString()}
                type="radio"
                classNameContainer="mb-5 last:mb-0"
                classNameLabel="mr-2"
                label={label(item.from, item.to, index)}
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
