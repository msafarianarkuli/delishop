import {useState} from "react";
import {CustomTextArea} from "components";
import styles from "view/restaurantOrderRate/restaurantOrderRate.module.scss";

function RestaurantOrderRateDescription() {
  const [text, setText] = useState("");

  return (
    <CustomTextArea
      id="description"
      classNameContainer="mb-5"
      className={styles.restaurant_order_rate_description}
      value={text}
      onChange={(e) => {
        const value = e.target.value;
        setText(value);
      }}
      rows={7}
      placeholder="تجربه شما از این سفارش ...."
    />
  );
}

export default RestaurantOrderRateDescription;
