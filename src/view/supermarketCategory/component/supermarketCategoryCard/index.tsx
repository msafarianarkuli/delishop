import Counter from "components/counter/Counter";
import {useState} from "react";
import classNames from "classnames";
import styles from "view/supermarketCategory/component/supermarketCategoryCard/supermarketCategoryCard.module.scss";
import {IconCoin} from "assets/icons";

interface ISupermarketCategoryCard {
  image: string;
  coin: number;
  title: string;
  description: string;
  price: number;
  initialCount?: number;
}

function SupermarketCategoryCard(props: ISupermarketCategoryCard) {
  const {image, description, price, title, coin, initialCount} = props;
  const [count, setCount] = useState(initialCount || 0);
  const counterClassNames = classNames({
    "flex-row-reverse w-[100px] h-[34px]": true,
    [styles.supermarket_category_card_counter]: count,
  });
  return (
    <div className={styles.supermarket_category_card_container}>
      <Counter
        count={count}
        // className={styles.supermarket_category_card_counter}
        className={counterClassNames}
        primaryType="supermarket"
        showMinusOnlyPositiveNumber
        showNumberOnlyPositiveNumber
        onAddClick={() => {
          setCount((prevState) => prevState + 1);
        }}
        onMinusClick={() => {
          if (count > 0) setCount((prevState) => prevState - 1);
        }}
      />
      <div className="flex justify-center items-center h-[70px] w-full">
        <img src={image} alt={title} className="w-full h-auto" />
      </div>
      <div className="flex items-center justify-end">
        <div className="flex items-center p-1 bg-primarySupermarket/10 rounded-[5px]">
          <IconCoin className="w-4 h-4 ml-1" />
          <span className="h-4 text-[13px] font-medium">{coin}</span>
        </div>
      </div>
      <div className="text-[13px] font-medium mt-2">{title}</div>
      <div className="text-[11px] font-normal my-1">{description}</div>
      <div>
        <span className="text-[13px] font-semibold">{price.toLocaleString("en-US")}</span>
        <span className="mr-1 text-[11px] font-normal">تومان</span>
      </div>
    </div>
  );
}

export default SupermarketCategoryCard;
