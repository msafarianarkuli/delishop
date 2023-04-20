import styles from "view/supermarket/component/supermarketCard/supermarketCard.module.scss";
import {IconCoin, IconStarFill} from "assets/icons";
import IconDelivery from "assets/icons/IconDelivery";

interface ISuperMarketCard {
  image?: string;
  title: string;
  rate: string;
  deliveryPrice: number;
  coin: number;
}

function SuperMarketCard(props: ISuperMarketCard) {
  const {rate, deliveryPrice, title, coin, image} = props;
  return (
    <div className={styles.supermarket_card_container}>
      <div className="flex">
        <img src={image} alt={title} className="w-[144px] h-[80px] rounded-bl-[10px] object-center object-contain" />
        <div className="text-[15px] font-medium mx-2 mt-1">
          <span>{title}</span>
          {/*<span className="text-iconColor mr-1">({address})</span>*/}
        </div>
      </div>
      <div className="flex items-center justify-between font-medium py-2 px-3">
        <div className="flex items-center text-[11px]">
          <IconCoin className="w-4 h-4 ml-1" />
          <span>جایزه خرید</span>
          <span className="mx-1">{coin}</span>
          <span>سکه</span>
        </div>
        <div className="flex items-center">
          <div className="inner_box flex items-center text-[11px]">
            <IconDelivery className="w-3 h-auto" />
            <span className="mx-1">{deliveryPrice.toLocaleString("en-US")}</span>
            <span>تومان</span>
          </div>
          <div className="inner_box flex items-center mr-2">
            <span className="text-[13px] h-4">{rate}</span>
            <IconStarFill className="w-3 h-auto mr-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuperMarketCard;
