import styles from "view/restaurantOrderRate/component/restaurantOrderRateCard/restaurantOrderRateCard.module.scss";
import {useState} from "react";
import ReactSlider from "react-slider";
import {IconStar} from "assets/icons";

interface IRestaurantOrderRateCard {
  title: string;
}

function RestaurantOrderRateCard(props: IRestaurantOrderRateCard) {
  const {title} = props;
  const [rate, setRate] = useState(3.6);
  return (
    <div className={styles.restaurant_order_rate_card_container}>
      <div className="text-[16px] font-semibold">{title}</div>
      <div className="text-[25px] font-light">{rate}</div>
      <ReactSlider
        min={0}
        max={5}
        step={0.1}
        className="rate_slider mb-3"
        trackClassName="rate_slider_track"
        renderThumb={(props) => {
          return (
            <div {...props}>
              <IconStar className="w-6 h-6 text-primary" />
            </div>
          );
        }}
        value={rate}
        onChange={(value) => {
          setRate(value);
        }}
      />
    </div>
  );
}

export default RestaurantOrderRateCard;
