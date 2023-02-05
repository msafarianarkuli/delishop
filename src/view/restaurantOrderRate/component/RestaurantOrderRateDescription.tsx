import {CustomTextAreaReactHook} from "components";
import {useFormContext} from "react-hook-form";
import styles from "view/restaurantOrderRate/restaurantOrderRate.module.scss";

function RestaurantOrderRateDescription() {
  const {control} = useFormContext();

  return (
    <CustomTextAreaReactHook
      control={control}
      id="description"
      classNameContainer="mb-5"
      className={styles.restaurant_order_rate_description}
      rows={7}
      placeholder="تجربه شما از این سفارش ...."
    />
  );
}

export default RestaurantOrderRateDescription;
