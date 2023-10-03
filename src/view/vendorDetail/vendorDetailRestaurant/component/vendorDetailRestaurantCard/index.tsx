import {Button} from "antd";
import {IconCoin} from "assets/icons";
import {Counter} from "components";
import styles from "view/vendorDetail/vendorDetailRestaurant/component/vendorDetailRestaurantCard/vendorDetailRestaurantCard.module.scss";

export interface IVendorDetailRestaurantCard {
  image?: string;
  title: string;
  description: string;
  price: number;
  coin: number;
  count?: number;
  discount_num?: number;
  stock?: number;
  onAddClick?: (count: number) => void;
  onMinusClick?: (count: number) => void;
  onClick?: () => void;
  disabled?: boolean;
}

function VendorDetailRestaurantCard(props: IVendorDetailRestaurantCard) {
  const {
    description,
    price,
    title,
    count,
    discount_num,
    stock,
    coin,
    image,
    onAddClick,
    onMinusClick,
    onClick,
    disabled,
  } = props;

  return (
    <div
      className={`${styles.vendor_detail_restaurant_card} ${discount_num ? styles.discount_card : ""} cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex flex-col flex-1 ml-2 justify-between">
        <div>
          <div className="text-[15px]">{title}</div>
          <div className="text-[12px] md:text-[13px] text-iconColor my-2 w-[150px] sm:w-auto">{description}</div>
        </div>
        {discount_num ? (
          <div className="-mb-8 flex gap-2 items-start">
            <div className="flex justify-center items-center bg-primary px-[4px] rounded-lg text-white text-[10px]">
              45%
            </div>
            <span className="line-through">{price?.toLocaleString("en-US")}</span>
          </div>
        ) : null}
        <div className="flex items-center">
          <div>
            <span className="text-[17px] font-semibold">{price?.toLocaleString("en-US")}</span>
            <span className="text-[12px]">تومان</span>
          </div>
          {coin ? (
            <div className="flex items-center bg-[#E8E8EE] rounded p-1 mr-3">
              <IconCoin className="w-3 h-3 ml-1" />
              <span className="font-semibold text-[13px]">{coin}</span>
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col items-center w-[100px]">
        <div className="w-[100px] h-[100px]">
          <img src={image} alt={title} className="w-full h-full object-center object-cover rounded-[16px]" />
        </div>
        {stock ? (
          <Counter
            disabled={disabled}
            stock={stock}
            className="mt-4"
            count={count}
            showNumberOnlyPositiveNumber
            showMinusOnlyPositiveNumber
            onAddClick={onAddClick}
            onMinusClick={onMinusClick}
          />
        ) : (
          <Button disabled type="primary" className="">
            تمام شد
          </Button>
        )}
      </div>
    </div>
  );
}

export default VendorDetailRestaurantCard;
