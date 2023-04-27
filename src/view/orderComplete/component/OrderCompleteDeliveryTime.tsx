import styles from "view/orderComplete/orderComplete.module.scss";
import {Checkbox} from "components";
import OrderCompleteTitle from "view/orderComplete/component/OrderCompleteTitle";
import {useCallback, useEffect, useMemo, useState} from "react";
import {number2Digits} from "utils/utils";
import useTypeColor from "hooks/useTypeColor";
import {
  IOrderCompleteDeliverTime,
  setOrderCompleteDeliveryTime,
  useOrderComplete,
  useOrderCompleteAction,
} from "view/orderComplete/context/OrderCompleteProvider";
import dayjs from "dayjs";
import {IGetVendorsDetailVendorOpenHours} from "types/interfaceVendorDetail";
import {useOrderCompleteVendorDetailData} from "view/orderComplete/context/OrderCompleteVendorDetailDataProvider";

function OrderCompleteDeliveryTime() {
  const type = useTypeColor();
  const [time, setTime] = useState<IOrderCompleteDeliverTime[]>([]);
  const {deliveryTime} = useOrderComplete();
  const dispatch = useOrderCompleteAction();
  const {data, isLoading} = useOrderCompleteVendorDetailData();
  const [error, setError] = useState("");

  const openHours = useMemo(() => data?.open_hours || null, [data?.open_hours]);

  const hours = useMemo(() => {
    setError("");
    let result: IOrderCompleteDeliverTime[] = [];
    const day = dayjs().format("dd").toLowerCase() as keyof IGetVendorsDetailVendorOpenHours;
    if (openHours) {
      const today = openHours[day];
      if (today !== "close") {
        const splitPeriod = today.split(",");
        splitPeriod.forEach((item) => {
          const period = item.split("-");
          let HStart = "";
          let MStart = "";
          let HEnd = "";
          let MEnd = "";
          period.forEach((value, index) => {
            const tmp = value.split(":");
            if (index === 0) {
              HStart = tmp[0];
              MStart = tmp[1] || "0";
            } else if (index === 1) {
              HEnd = tmp[0];
              MEnd = tmp[1] || "0";
            }
          });
          const diff = +HEnd - +HStart;
          if (!isNaN(diff) && diff > 0) {
            const tmp = Array.from(new Array(diff), (_, i) => {
              const tmp = +HStart + i;
              const MEndTime = diff - 1 > i ? MStart : MEnd;
              const next = tmp + 1;
              return {
                isTemp: false,
                from: number2Digits(tmp) + ":" + number2Digits(+MStart),
                to: number2Digits(next) + ":" + number2Digits(+MEndTime),
              };
            });
            result = result.concat(tmp);
          }
        });
      } else {
        setError("امروز تعطیل می باشد");
      }
    }
    return result;
  }, [openHours]);

  useEffect(() => {
    const basicDate = "1991-07-30";
    const todayHour = dayjs().get("hour");
    const todayMin = dayjs().get("minute");
    const todayTimestamp = dayjs(`${basicDate} ${todayHour}:${todayMin}`).valueOf();
    let tmpTimes: IOrderCompleteDeliverTime[] = [];
    if (hours.length) {
      const tmp = hours.filter((value) => {
        const tempHour = dayjs(`${basicDate} ${value.from}`).add(30, "minute").valueOf();
        return tempHour > todayTimestamp;
      });
      if (tmp.length) {
        tmpTimes = [{isTemp: true, from: "", to: ""}, ...tmp];
      }
    }
    setTime(tmpTimes);
  }, [hours]);

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
