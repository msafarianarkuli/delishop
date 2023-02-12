import styles from "view/restaurantProductDetail/restaurantProductDetail.module.scss";
import {IconRoundedDown, IconRoundedTop} from "assets/icons";
import RestaurantProductDetailExtraItem from "view/restaurantProductDetail/component/RestaurantProductDetailExtraItem";
import {useRef, useState} from "react";

const arr = Array.from(new Array(5), (_, i) => i + 1);

const initialHeight = 60;

function RestaurantProductDetailExtra() {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(initialHeight);

  return (
    <div className="my-9 px-screenSpace">
      <div className={styles.restaurant_product_detail_extra} style={{height}}>
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
            return <RestaurantProductDetailExtraItem key={item} title="پک کارد و چنگال" price={6500} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default RestaurantProductDetailExtra;
