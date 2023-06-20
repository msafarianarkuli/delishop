import {useRef, useState} from "react";
import {IconRoundedDown, IconRoundedTop} from "assets/icons";
import VendorProductRestaurantExtraItem from "view/vendorProduct/component/vendorProductRestaurant/VendorProductRestaurantExtraItem";
import styles from "view/vendorProduct/vendorProduct.module.scss";

const arr = Array.from(new Array(5), (_, i) => i + 1);

const initialHeight = 60;

function VendorProductRestaurantExtra() {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(initialHeight);

  return (
    <div className="my-9 px-screenSpace">
      <div className={styles.vendor_product_restaurant_extra} style={{height}}>
        <div
          className="flex items-center justify-between h-[60px] w-full cursor-pointer"
          onClick={() => {
            if (height !== initialHeight) {
              setHeight(initialHeight);
            } else {
              const div = ref.current as HTMLDivElement;
              const height = div.scrollHeight;
              setHeight(height + initialHeight + 25);
            }
          }}
        >
          <div className="font-medium text-[15px]">افزودن موارد بیشتر</div>
          {height === initialHeight ? (
            <IconRoundedDown className="w-5 h-5 text-iconColor" />
          ) : (
            <IconRoundedTop className="w-5 h-5 text-iconColor" />
          )}
        </div>
        <div ref={ref}>
          {arr.map((item) => {
            return <VendorProductRestaurantExtraItem key={item} title="پک کارد و چنگال" price={6500} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default VendorProductRestaurantExtra;
