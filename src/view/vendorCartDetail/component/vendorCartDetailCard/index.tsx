import {Counter} from "components";
import styles from "view/vendorCartDetail/component/vendorCartDetailCard/vendorCartDetailCard.module.scss";

export interface IVendorCartDetailCard {
  title: string;
  image?: string;
  price: number;
  count: number;
  onAddClick: () => void;
  onMinusClick: () => void;
}

function VendorCartDetailCard(props: IVendorCartDetailCard) {
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
            className={styles.vendor_cart_detail_card_counter}
            primaryType="default"
            onAddClick={onAddClick}
            onMinusClick={onMinusClick}
          />
        </div>
      </div>
    </div>
  );
}

export default VendorCartDetailCard;
