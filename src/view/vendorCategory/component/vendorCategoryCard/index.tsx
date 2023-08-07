import classNames from "classnames";
import Counter from "components/counter/Counter";
import {IconCoin} from "assets/icons";
import styles from "view/vendorCategory/component/vendorCategoryCard/vendorCategoryCard.module.scss";

interface IVendorCategoryCard {
  image?: string;
  coin: number;
  title: string;
  description: string;
  price: number;
  count?: number;
  stock?: number;
  onAddClick: () => void;
  onMinusClick: () => void;
  disabled?: boolean;
}

function VendorCategoryCard(props: IVendorCategoryCard) {
  const {image, description, price, title, coin, count, stock, onMinusClick, onAddClick, disabled} = props;
  const counterClassNames = classNames({
    "absolute top-[8px] z-[5] flex-row-reverse w-[100px] h-[34px]": true,
    [styles.vendor_category_card_counter]: count,
  });

  return (
    <div className={styles.vendor_category_card_container}>
      <div className="relative flex justify-center items-center w-full pb-[100%]">
        <Counter
          disabled={disabled}
          count={count}
          stock={stock}
          className={counterClassNames}
          primaryType="default"
          showMinusOnlyPositiveNumber
          showNumberOnlyPositiveNumber
          onAddClick={onAddClick}
          onMinusClick={onMinusClick}
        />
        <img
          src={image}
          alt={title}
          className="absolute top-0 w-full h-full rounded-[10px] object-center object-contain"
        />
      </div>
      <div className="flex items-center justify-end mt-2">
        <div className="flex items-center p-1 bg-primarySupermarket/10 rounded-[5px]">
          <IconCoin className="w-4 h-4 ml-1" />
          <span className="h-4 text-[13px] font-medium">{coin}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="text-[13px] font-medium mt-2">{title}</div>
        <div className="text-[11px] font-normal my-1">{description}</div>
        <div>
          {stock ? (
            <>
              <span className="text-[13px] font-semibold">{price.toLocaleString("en-US")}</span>
              <span className="mr-1 text-[11px] font-normal">تومان</span>
            </>
          ) : (
            <span className="text-[13px] font-semibold text-error">ناموجود</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default VendorCategoryCard;
