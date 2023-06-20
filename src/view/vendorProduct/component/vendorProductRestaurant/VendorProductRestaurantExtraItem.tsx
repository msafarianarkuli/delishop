import {useState} from "react";
import {Button} from "antd";
import {IconRoundedLeft, IconRoundedRight} from "assets/icons";
import styles from "view/vendorProduct/vendorProduct.module.scss";

interface IVendorProductRestaurantExtraItem {
  title: string;
  price: number;
  count?: number;
}

function VendorProductRestaurantExtraItem(props: IVendorProductRestaurantExtraItem) {
  const {title, price, count} = props;
  const [counter, setCounter] = useState(count || 0);
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="text-[13px]">
        <span className="font-semibold">{title}</span>
        <span className="mr-1 font-light">
          ({price.toLocaleString("en-US")}
          <span className="mr-1">تومان</span>)
        </span>
      </div>
      <div className="flex items-center">
        <Button
          icon={<IconRoundedRight className="w-4 h-4 text-iconColor" />}
          className={styles.vendor_product_restaurant_extra_counter_btn}
          onClick={() => {
            setCounter((prevState) => prevState + 1);
          }}
        />
        <div className="w-7 text-[15px] font-semibold text-center">{counter}</div>
        <Button
          icon={<IconRoundedLeft className="w-4 h-4 text-iconColor" />}
          className={styles.vendor_product_restaurant_extra_counter_btn}
          onClick={() => {
            if (counter > 0) setCounter((prevState) => prevState - 1);
          }}
        />
      </div>
    </div>
  );
}

export default VendorProductRestaurantExtraItem;
