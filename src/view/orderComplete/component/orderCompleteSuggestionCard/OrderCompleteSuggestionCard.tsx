import {IconAdd} from "assets/icons";
import styles from "view/orderComplete/component/orderCompleteSuggestionCard/orderCompleteSuggestion.module.scss";
import classNames from "classnames";
import {TUseTypeColor} from "hooks/useTypeColor";

interface IOrderCompleteSuggestionCard {
  title: string;
  image: string;
  price: number;
  type: TUseTypeColor;
}

function OrderCompleteSuggestionCard(props: IOrderCompleteSuggestionCard) {
  const {image, title, price, type = "default"} = props;

  const btnClassNames = classNames({
    "flex items-center justify-center w-[30px] h-[30px] rounded-full": true,
    "bg-primary": type === "default",
    "bg-primarySupermarket": type === "supermarket",
  });
  return (
    <div className={styles.restaurant_complete_suggestion_card}>
      <img src={image} alt={title} className="h-full w-[80px] object-center object-cover rounded-[10px]" />
      <div className="flex flex-1 flex-col justify-between p-3 text-[13px]">
        <div className="font-medium">{title}</div>
        <div>
          <span>{price.toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </div>
      </div>
      <div className="flex items-center pl-3">
        <button className={btnClassNames}>
          <IconAdd className="w-[15px] h-[15] drop-shadow-[0px_1px_3px_rgba(36,65,93,0.298)]" />
        </button>
      </div>
    </div>
  );
}

export default OrderCompleteSuggestionCard;
