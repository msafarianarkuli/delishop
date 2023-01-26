import {IconAdd, IconCoin, IconMinus} from "assets/icons";
import styles from "view/restaurantDetail/component/restaurantDetailCard/restaurantDetailCard.module.scss";
import {useState} from "react";

interface IRestaurantDetailCard {
  image: string;
  title: string;
  description: string;
  price: number;
  coin: number;
  count?: number;
  onAddExtraItems: () => void;
}

function RestaurantDetailCard(props: IRestaurantDetailCard) {
  const {description, price, title, count, coin, image, onAddExtraItems} = props;
  const [counter, setCounter] = useState(count || 0);

  return (
    <div className={styles.restaurant_detail_card}>
      <div className="flex flex-col flex-1 ml-2">
        <div className="text-[15px]">{title}</div>
        <div className="text-[13px] text-iconColor my-2">{description}</div>
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
          <img src={image} className="w-full h-full object-center object-cover" />
        </div>
        <div className="flex flex-nowrap items-center mt-4">
          <button
            className="flex items-center justify-center w-[30px] h-[30px] bg-primary rounded-full"
            onClick={() => {
              console.log("counter", counter);
              if (counter === 0) onAddExtraItems();
              setCounter((prevState) => prevState + 1);
            }}
          >
            <IconAdd className="w-[15px] h-[15] drop-shadow-[0px_1px_3px_rgba(36,65,93,0.298)]" />
          </button>
          {counter ? (
            <>
              <div className="text-center w-[30px]">{counter}</div>
              <button
                className={styles.restaurant_detail_card_minus}
                onClick={() => {
                  if (counter > 0) setCounter((prevState) => prevState - 1);
                }}
              >
                <IconMinus className="w-[15px] h-auto" />
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailCard;
