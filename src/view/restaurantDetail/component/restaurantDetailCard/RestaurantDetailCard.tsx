import {IconCoin} from "assets/icons";
import {Counter} from "components";
import styles from "view/restaurantDetail/component/restaurantDetailCard/restaurantDetailCard.module.scss";

export interface IRestaurantDetailCard {
  image?: string;
  title: string;
  description: string;
  price: number;
  coin: number;
  count?: number;
  onAddClick?: (count: number) => void;
  onMinusClick?: (count: number) => void;
}

function RestaurantDetailCard(props: IRestaurantDetailCard) {
  const {description, price, title, count, coin, image, onAddClick, onMinusClick} = props;
  // const [counter, setCounter] = useState(count || 0);

  return (
    <div className={styles.restaurant_detail_card}>
      <div className="flex flex-col flex-1 ml-2 justify-between">
        <div>
          <div className="text-[15px]">{title}</div>
          <div className="text-[13px] text-iconColor my-2">{description}</div>
        </div>
        <div className="flex items-center">
          <div>
            <span>{price?.toLocaleString("en-US")}</span>
            <span className="text-[13px]">تومان</span>
          </div>
          <div className="flex items-center bg-[#E8E8EE] rounded p-1 mr-1">
            <IconCoin className="w-5 h-5 ml-1" />
            <span>{coin}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-[100px]">
        <div className="w-[100px] h-[100px]">
          <img src={image} alt={title} className="w-full h-full object-center object-cover rounded-[16px]" />
        </div>
        <Counter
          className="mt-4"
          count={count}
          showNumberOnlyPositiveNumber
          showMinusOnlyPositiveNumber
          onAddClick={onAddClick}
          onMinusClick={onMinusClick}
        />
      </div>
    </div>
  );
}

export default RestaurantDetailCard;
