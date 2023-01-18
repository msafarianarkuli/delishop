import {IconClock, IconCoin, IconStarEmpty, IconStartFill} from "assets/icons";
import styles from "view/restaurant/component/restaurantCard/restaurantCard.module.scss";
import {useMemo} from "react";

interface IRestaurantCard {
  image: string;
  title: string;
  address: string;
  description: string;
  star: number;
  time: number;
  coin: number;
}

const maxStar = 5;

function RestaurantCard(props: IRestaurantCard) {
  const {time, star, coin, address, title, image, description} = props;

  const starFill = useMemo(() => Array.from(new Array(star < maxStar ? Math.round(star) : 0), (_, i) => i + 1), [star]);
  const starEmpty = useMemo(
    () => Array.from(new Array(star < maxStar ? maxStar - Math.round(star) : 0), (_, i) => i + 1),
    [star]
  );

  return (
    <div className={styles.restaurant_card_container}>
      <div className="relative w-full pb-[34.1%] overflow-hidden rounded-t-[12px]">
        <img src={image} alt="image" className="absolute inset-0 object-center object-cover w-full h-full" />
      </div>
      <div className={styles.restaurant_card_content}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="font-bold">{title}</span>
            <span className="text-[12px] font-light text-textColorLight mr-2">{address}</span>
          </div>
          <div className="flex items-center flex-row-reverse">
            {starFill.map((item) => (
              <IconStartFill key={item} className="w-4 h-auto" />
            ))}
            {starEmpty.map((item) => (
              <IconStarEmpty key={item} className="w-4 h-auto" />
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-textColorLight text-[13px] font-light">{description}</div>
          <div className="flex items-center">
            <div className={styles.restaurant_card_gold_box}>
              <IconCoin className="w-4 h-4 ml-1" />
              <span className="text-[12px]">{coin}</span>
            </div>
            <div className={styles.restaurant_card_time_box}>
              <span className="text-[12px]">تا {time} دقیقه</span>
              <IconClock className="w-4 h-4 text-iconColor mr-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
