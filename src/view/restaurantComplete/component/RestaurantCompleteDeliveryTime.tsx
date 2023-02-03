import styles from "view/restaurantComplete/restaurantComplete.module.scss";
import {Checkbox} from "components";
import RestaurantCompleteTitle from "view/restaurantComplete/component/RestaurantCompleteTitle";
import {useEffect, useState} from "react";
import {number2Digits} from "utils/utils";

interface IDeliverTime {
  from: number;
  to: number;
}

const tmpTime: IDeliverTime[] = Array.from(new Array(15), (_, i) => {
  const tmp = 8 + i;
  return {
    from: tmp,
    to: tmp + 1,
  };
});

function RestaurantCompleteDeliveryTime() {
  const [deliveryTime, setDeliveryTime] = useState<IDeliverTime | null>(null);
  const [time, setTime] = useState<IDeliverTime[]>([]);

  useEffect(() => {
    const todayHour = new Date().getHours();
    const index = todayHour === 0 ? -1 : tmpTime.findIndex((item) => item.from > todayHour);
    if (index !== -1) {
      setTime(tmpTime.slice(index));
    } else {
      setTime([]);
    }
  }, []);

  return (
    <div className="mt-7">
      <RestaurantCompleteTitle title="زمان تحویل" />
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
                label={
                  <>
                    <span>{number2Digits(item.from) + ":00"}</span>
                    <span className="mx-1">تا</span>
                    <span>{number2Digits(item.to) + ":00"}</span>
                  </>
                }
                value={deliveryTime?.from === item.from}
                onChange={() => {
                  setDeliveryTime(item);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RestaurantCompleteDeliveryTime;
