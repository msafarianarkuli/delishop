import React from "react";
import {Counter} from "components";
import styles from "view/supermarketCart/component/supermarketCartCard/supermarketCartCard.module.scss";

export interface ISupermarketCartCard {
  title: string;
  image?: string;
  price: number;
  count: number;
  onAddClick: () => void;
  onMinusClick: () => void;
}

function SupermarketCartCard(props: ISupermarketCartCard) {
  const {count, price, image, title, onAddClick, onMinusClick} = props;
  return (
    <div className="flex mb-[20px] last:mb-0">
      <div className="w-[80px] h-[80px] rounded-[14px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-center object-cover" />
      </div>
      <div className="flex flex-1 flex-col justify-between mr-4">
        <div className="font-normal text-[13px]">{title}</div>
        <div className="flex justify-between items-center">
          <div className="font-medium text-[15px]">
            <span>{price?.toLocaleString("en-US")}</span>
            <span className="mr-1 text-[12px] text-iconColor">تومان</span>
          </div>
          <Counter
            count={count}
            className={styles.supermarket_cart_card_counter}
            primaryType="supermarket"
            onAddClick={onAddClick}
            onMinusClick={onMinusClick}
          />
        </div>
      </div>
    </div>
  );
}

export default SupermarketCartCard;
