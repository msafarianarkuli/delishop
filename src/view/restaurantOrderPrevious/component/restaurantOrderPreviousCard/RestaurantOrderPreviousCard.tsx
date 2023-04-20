import {MouseEventHandler, useMemo} from "react";
import {IconCoin, IconRoundedLeft} from "assets/icons";
import {Button} from "antd";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import styles from "view/restaurantOrderPrevious/component/restaurantOrderPreviousCard/restaurantOrderPreviousCard.module.scss";
import {number2Digits} from "utils/utils";
import Link from "next/link";
import img1 from "assets/images/res-order-barger.png";
import {TGetOrdersListResOrdersItemsProductKinds} from "types/interfaceOdrdersList";
import {OrderStatus} from "utils/Const";
import classNames from "classnames";

dayjs.extend(jalaliday);

interface IRestaurantOrderPreviousCard {
  id: string;
  receiptNumber: number;
  date: string;
  image?: string;
  title: string;
  deliveryTitle: string;
  orderStatus: number;
  orders: TGetOrdersListResOrdersItemsProductKinds;
  onClickReOrder: MouseEventHandler;
  onClickReceipt: MouseEventHandler;
  coin: number;
  totalPrice: number;
}

function RestaurantOrderPreviousCard(props: IRestaurantOrderPreviousCard) {
  const {
    onClickReOrder,
    orders,
    onClickReceipt,
    receiptNumber,
    image,
    orderStatus,
    title,
    deliveryTitle,
    coin,
    date,
    id,
    totalPrice,
  } = props;

  const status = useMemo(() => {
    const tmpStatus = OrderStatus.find((item) => item.id === orderStatus);
    return tmpStatus?.title || "";
  }, [orderStatus]);

  const statusClassName = classNames({
    "inner_box text-[13px] font-semibold": true,
    "text-primary": orderStatus === 6,
    "text-textColorLight": orderStatus !== 6,
  });

  return (
    <div className={styles.restaurant_order_previous_card_container}>
      <div className="flex flex-wrap items-center justify-between px-[29px] pb-[19px] border-b border-borderColor">
        <div className="text-[15px] font-bold whitespace-nowrap">شماره فاکتور:{receiptNumber}</div>
        <div className="flex items-center text-[15px] font-medium">
          <div className="ml-2 whitespace-nowrap">
            {number2Digits(dayjs(date).hour())}:{number2Digits(dayjs(date).minute())}
          </div>
          <div className="whitespace-nowrap">{dayjs(date).calendar("jalali").locale("fa").format("dddd DD MMMM")}</div>
        </div>
      </div>
      <div className="px-[24px] py-[19px] border-b border-borderColor">
        <div className="flex">
          <img src={image} alt={title} className={styles.restaurant_order_previous_card_image} />
          <div className="flex flex-col flex-1 mr-3">
            <div className="text-[17px] font-medium">
              <span className="ml-1">{title}</span>
              {/*<span className="text-textColorLight">({address})</span>*/}
            </div>
            <div className="flex flex-1 items-center justify-between mt-[17px]">
              <div className="text-[15px] font-medium text-textColorLight">ارسال به: {deliveryTitle}</div>
              <div className={statusClassName}>{status}</div>
            </div>
          </div>
        </div>
        <div className="flex items-center overflow-auto py-5 mt-4 mb-7">
          {orders.map((item, index) => {
            return (
              <div key={index} className="ml-3">
                <div className="relative">
                  <img
                    src={img1.src}
                    alt={item.product.displayname}
                    className={styles.restaurant_order_previous_card_order_list_image}
                  />
                  {item.count_num > 1 ? (
                    <div className="absolute flex items-center justify-center top-0 left-0 w-5 h-5 rounded-full bg-iconColor">
                      <div className="font-medium text-[11px] text-white h-3">{item.count_num}</div>
                    </div>
                  ) : null}
                </div>
                <div className="text-[11px] font-medium text-textColorLight text-center mt-1">
                  {Math.round(item.price_prc / 10).toLocaleString("en-US")}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[15px]">
            <span>مجموع:</span>
            <span className="mx-1 font-bold">{totalPrice.toLocaleString("en-US")}</span>
            <span className="text-[13px] text-textColorLight">تومان</span>
          </div>
          <div className="flex items-center text-[17px]">
            <IconCoin className="w-5 h-5 ml-1" />
            <span>{coin}</span>
            <span>+</span>
          </div>
        </div>
      </div>
      {orderStatus === 6 ? (
        <Link
          href={`/restaurant/order/rate/${id}`}
          className="flex items-center justify-end py-3 px-[24px] border-b border-borderColor"
        >
          <div className="text-[15px]">به سفارش خود امتیاز دهید</div>
          <IconRoundedLeft className="w-5 h-5 mr-1" />
        </Link>
      ) : null}
      <div className="flex items-center mt-5 mx-[27px]">
        <Button
          type="primary"
          className="submit-btn modal-submit-btn w-full h-[40px] font-medium text-[17px] rounded-[4px] ml-3"
          onClick={onClickReOrder}
        >
          سفارش مجدد
        </Button>
        <Button
          className="secondary-btn w-full h-[40px] text-[17px] font-medium rounded-[4px]"
          onClick={onClickReceipt}
        >
          مشاهده فاکتور
        </Button>
      </div>
    </div>
  );
}

export default RestaurantOrderPreviousCard;
