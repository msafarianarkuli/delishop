import {IconCoin} from "assets/icons";
import {number2Digits} from "utils/utils";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import accept from "assets/images/pin-order-accept.svg";
import delivery from "assets/images/pin-order-delivery.svg";
import styles from "view/restaurantOrderActive/component/restaurantOrderActiveCard/restaurantOrderActiveCard.module.scss";
import {Button} from "antd";
import {MouseEventHandler} from "react";

dayjs.extend(jalaliday);

interface IRestaurantOrderActiveCard {
  title: string;
  receiptNumber: number;
  coin: number;
  image?: string;
  deliveryTitle: string;
  date: string;
  deliveryTime: string;
  onClickSubmit: MouseEventHandler;
}

function RestaurantOrderActiveCard(props: IRestaurantOrderActiveCard) {
  const {title, image, deliveryTitle, date, deliveryTime, receiptNumber, coin, onClickSubmit} = props;
  return (
    <div className={styles.restaurant_order_active_card_container}>
      <div className="flex h-[60px] items-center justify-between bg-textColor px-[19px] text-white">
        <div className="text-[15px] font-medium">
          <span>شماره فاکتور:</span>
          <span>{receiptNumber}</span>
        </div>
        <div className="flex items-center text-[17px]">
          <IconCoin className="w-5 h-5" />
          <div className="mr-1 h-5">
            <span>{coin}</span>
            <span>+</span>
          </div>
        </div>
      </div>
      <div className="py-[15px] px-[19px]">
        <div className="flex">
          <img src={image} alt={title} className={styles.restaurant_order_active_card_image} />
          <div className="flex flex-col flex-1 mr-3">
            <div className="text-[17px] font-medium">
              <span className="ml-1">{title}</span>
              {/*<span className="text-textColorLight">({address})</span>*/}
            </div>
            <div className="flex flex-1 items-center justify-between mt-[17px]">
              <div className="text-[15px] font-medium text-textColorLight">ارسال به: {deliveryTitle}</div>
              <div className="flex items-center text-[15px] font-medium text-textColorLight">
                <div className="ml-2">
                  {number2Digits(dayjs(date).hour())}:{number2Digits(dayjs(date).minute())}
                </div>
                <div>{dayjs(date).calendar("jalali").locale("fa").format("YYYY/MM/DD")}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 mb-10 mx-7">
          <div className="relative w-full h-[2px] bg-[#D9D9D9] rounded-full">
            <div className="absolute right-0 top-0 h-full w-1/2 bg-primary rounded-full" />
            <img
              src={accept.src}
              alt="accept"
              className="absolute w-[19px] h-[28px] bottom-[2px] right-[calc(50%-9px)]"
            />
            <img src={delivery.src} alt="delivery" className="absolute w-[19px] h-[28px] bottom-[2px] -left-[9px]" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[15px] font-medium text-primary pl-1">سفارش شما در حال آماده سازی می باشد.</div>
          <div className="font-semibold whitespace-nowrap">
            <div className="text-[11px] mb-2">تحویل تا ساعت:</div>
            <div className="inner_box text-[13px] text-center">{deliveryTime}</div>
          </div>
        </div>
        <div className="text-[15px] mt-5">
          <span>مجموع:</span>
          <span className="mx-1 font-bold">{(710000).toLocaleString("en-US")}</span>
          <span className="text-[13px] text-textColorLight">تومان</span>
        </div>
        <Button
          type="primary"
          className="submit-btn modal-submit-btn rounded-[10px] w-full mt-4 text-[17px] font-medium"
          onClick={onClickSubmit}
        >
          مشاهده سفارش
        </Button>
      </div>
    </div>
  );
}

export default RestaurantOrderActiveCard;
