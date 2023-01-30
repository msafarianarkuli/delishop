import styles from "view/restaurantCart/component/restaurantCartCard/restaurantCartCard.module.scss";
import {Button} from "antd";
import {MouseEventHandler} from "react";

interface IDataRestaurantCartCardItem {
  count: number;
  title: string;
  price: number;
  extra?: string;
  extraPrice?: number;
}

export type TDataRestaurantCartCard = IDataRestaurantCartCardItem[];

interface IRestaurantCartCard {
  title: string;
  address: string;
  data: TDataRestaurantCartCard;
  onClickOk: MouseEventHandler;
  onClickRemove: MouseEventHandler;
}

function RestaurantCartCard(props: IRestaurantCartCard) {
  const {title, address, data, onClickOk, onClickRemove} = props;
  return (
    <div className={styles.restaurant_cart_card_container}>
      <div className="flex items-center px-5 h-[50px] bg-[#2C3036] text-white">
        <span>{title}</span>
        <span className="mr-1">({address})</span>
      </div>
      <div className="px-5 py-3">
        {data.map((item, index) => {
          return (
            <div key={index} className="py-3 border-t last:border-b border-borderColor">
              <div className="flex items-center justify-between">
                <div>
                  <span className="ml-1">({item.count})</span>
                  <span>{item.title}</span>
                </div>
                <div className="whitespace-nowrap">
                  <span>{item.price.toLocaleString("en-US")}</span>
                  <span className="mr-1">تومان</span>
                </div>
              </div>
              {item.extra && item.extraPrice ? (
                <div className="flex items-center justify-between mt-2">
                  <div className="truncate text-[13px] font-light ml-2">{item.extra}</div>
                  <div className="whitespace-nowrap">
                    <span>{item.extraPrice.toLocaleString("en-US")}</span>
                    <span className="mr-1">تومان</span>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
        <div className="flex items-center mt-4">
          <Button onClick={onClickOk} type="primary" className="submit-btn modal-submit-btn w-full ml-3">
            ادامه خرید
          </Button>
          <Button onClick={onClickRemove} className="secondary-btn w-full">
            حذف سبد
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCartCard;
