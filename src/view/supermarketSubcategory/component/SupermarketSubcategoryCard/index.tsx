import React from "react";
import classNames from "classnames";
import Counter from "components/counter/Counter";
import {IconCoin} from "assets/icons";
import styles from "view/supermarketSubcategory/component/SupermarketSubcategoryCard/supermarketSubcategoryCard.module.scss";

interface ISupermarketSubcategoryCard {
  image?: string;
  coin: number;
  title: string;
  description: string;
  price: number;
  count?: number;
  onAddClick: () => void;
  onMinusClick: () => void;
}

function SupermarketSubcategoryCard(props: ISupermarketSubcategoryCard) {
  const {image, description, price, title, coin, count, onMinusClick, onAddClick} = props;
  const counterClassNames = classNames({
    "flex-row-reverse w-[100px] h-[34px] mx-auto": true,
    [styles.supermarket_subcategory_card_counter]: count,
  });

  return (
    <div className={styles.supermarket_subcategory_card_container}>
      <Counter
        count={count}
        className={counterClassNames}
        primaryType="supermarket"
        showMinusOnlyPositiveNumber
        showNumberOnlyPositiveNumber
        onAddClick={onAddClick}
        onMinusClick={onMinusClick}
      />
      <div className="flex justify-center items-center h-[70px] w-full">
        <img src={image} alt={title} className="w-full h-auto max-h-[85%] rounded-[10px]" />
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

export default SupermarketSubcategoryCard;