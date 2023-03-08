import styles from "view/restaurantCart/component/restaurantCartCard/restaurantCartCard.module.scss";
import {Button} from "antd";
import {MouseEventHandler} from "react";

export interface IRestaurantCartCardDataItem {
  count: number;
  title: string;
  price: number;
  extra?: IDataRestaurantCartCardItemExtra[];
}

interface IDataRestaurantCartCardItemExtra {
  name: string;
  price: number;
}

export type TRestaurantCartCardData = IRestaurantCartCardDataItem[];

export interface IRestaurantCartCard {
  title: string;
  data: TRestaurantCartCardData;
  onClickOk: MouseEventHandler;
  onClickRemove: MouseEventHandler;
}

function RestaurantCartCard(props: IRestaurantCartCard) {
  const {title, data, onClickOk, onClickRemove} = props;
  return (
    <div className={styles.restaurant_cart_card_container}>
      <div className="flex items-center px-5 h-[50px] bg-[#2C3036] text-white">
        <span>{title}</span>
        {/*<span className="mr-1">({address})</span>*/}
      </div>
      <div className="px-5 py-3">
        {data.map((item, index) => {
          return (
            <div key={index} className="py-3 border-t last:border-b border-borderColor">
              <div className="flex items-center justify-between">
                <div className="text-[15px]">
                  <span>{item.title}</span>
                  <span className="font-extralight mr-1">({item.count})</span>
                </div>
                <div className="whitespace-nowrap text-[13px]">
                  <span>{(item.count * item.price).toLocaleString("en-US")}</span>
                  <span className="mr-1">تومان</span>
                </div>
              </div>
              <div className="flex flex-wrap">
                {item.extra?.map((element, idx) => {
                  return (
                    <div key={idx} className="flex text-[11px] mt-1">
                      <div className="ml-1">{element.name}</div>
                      <div className="whitespace-nowrap">
                        (<span>{element.price.toLocaleString("en-US")}</span>
                        <span className="mr-1">تومان</span>)
                      </div>
                    </div>
                  );
                })}
              </div>
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
