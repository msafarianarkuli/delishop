import React from "react";
import {useFormContext} from "react-hook-form";
import {CustomTextAreaReactHook} from "components";
import styles from "view/orderRate/orderRate.module.scss";

function OrderRateDescription() {
  const {control} = useFormContext();

  return (
    <CustomTextAreaReactHook
      control={control}
      id="description"
      classNameContainer="mb-5"
      className={styles.order_rate_description}
      rows={7}
      placeholder="تجربه شما از این سفارش ...."
    />
  );
}

export default OrderRateDescription;
