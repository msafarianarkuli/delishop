import classNames from "classnames";
import Counter from "components/counter/Counter";
import {IconCoin} from "assets/icons";
import styles from "view/vendorSubcategory/component/vendorSubcategoryCard/vendorSubcategoryCard.module.scss";

interface IVendorSubcategoryCard {
  image?: string;
  coin: number;
  title: string;
  description: string;
  price: number;
  count?: number;
  onAddClick: () => void;
  onMinusClick: () => void;
  disabled?: boolean;
}

function VendorSubcategoryCard(props: IVendorSubcategoryCard) {
  const {image, description, price, title, coin, count, onMinusClick, onAddClick, disabled} = props;
  const counterClassNames = classNames({
    "absolute top-[8px] z-[5] flex-row-reverse w-[100px] h-[34px] mx-auto": true,
    [styles.vendor_subcategory_card_counter]: count,
  });

  return (
    <div className={styles.vendor_subcategory_card_container}>
      <div className="relative flex justify-center items-center w-full pb-[100%]">
        <Counter
          disabled={disabled}
          count={count}
          className={counterClassNames}
          primaryType="supermarket"
          showMinusOnlyPositiveNumber
          showNumberOnlyPositiveNumber
          onAddClick={onAddClick}
          onMinusClick={onMinusClick}
        />
        <img src={image} alt={title} className="absolute top-0 w-full h-full rounded-[10px] object-center" />
      </div>
      <div className="flex items-center justify-end">
        <div className="flex items-center p-1 bg-primarySupermarket/10 rounded-[5px]">
          <IconCoin className="w-4 h-4 ml-1" />
          <span className="h-4 text-[13px] font-medium">{coin}</span>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-between">
        <div className="text-[13px] font-medium mt-2">{title}</div>
        <div className="text-[11px] font-normal my-1">{description}</div>
        <div>
          <span className="text-[13px] font-semibold">{price.toLocaleString("en-US")}</span>
          <span className="mr-1 text-[11px] font-normal">تومان</span>
        </div>
      </div>
    </div>
  );
}

export default VendorSubcategoryCard;
