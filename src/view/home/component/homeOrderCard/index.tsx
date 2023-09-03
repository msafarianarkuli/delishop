import styles from "view/home/component/homeOrderCard/homeOrderCard.module.scss";
import accept from "assets/images/pin-order-accept.svg";
import delivery from "assets/images/pin-order-delivery.svg";
import Link from "next/link";
import {IconRoundedLeft} from "assets/icons";
import {useMemo} from "react";
import classNames from "classnames";
import useOrderStatusText from "hooks/useOrderStatusText";
import {EOrderStatus} from "utils/Const";

interface IHomeOrderCard {
  deliveryTime: string;
  image?: string;
  title: string;
  id: number;
  orderStatus: number;
  categoryId: number;
  count?: number;
}

function HomeOrderCard(props: IHomeOrderCard) {
  const {deliveryTime, image, title, id, orderStatus, categoryId, count} = props;
  const hintText = useOrderStatusText(orderStatus);

  const href = useMemo(() => {
    if (categoryId === 2) {
      return `/order/${id}?map=1&supermarket=1`;
    }
    return `/order/${id}?map=1`;
  }, [categoryId, id]);

  const deliveryClassName = classNames({
    "inner_box text-[13px] text-center": true,
    "text-primary": categoryId !== 2,
    "text-primarySupermarket": categoryId === 2,
  });

  const orderClassName = classNames({
    "flex items-center": true,
    "text-primary": categoryId !== 2,
    "text-primarySupermarket": categoryId === 2,
  });

  return (
    <div className={`${styles.home_order_card_container} ${count === 1 && "w-full"}`}>
      <div className="flex items-center justify-between">
        <div className="text-[14px] font-medium pl-1 border-b border-textColor">{hintText}</div>
        <div className="font-semibold whitespace-nowrap">
          <div className="text-[11px] mb-2 text-center">تحویل تا ساعت:</div>
          <div className={deliveryClassName}>{deliveryTime}</div>
        </div>
      </div>
      <div className="mt-8 mb-5 mx-7">
        <div className="relative w-full h-[4px] bg-[#D9D9D9] rounded-full">
          <div
            className="absolute right-0 top-0 h-full bg-textColor rounded-full transition-width duration-300 ease-linear"
            style={{
              width: orderStatus === EOrderStatus.confirmed || orderStatus === EOrderStatus.ready ? "50%" : "100%",
            }}
          />
          {orderStatus === EOrderStatus.confirmed || orderStatus === EOrderStatus.ready ? (
            <img
              src={accept.src}
              alt="accept"
              className="absolute w-[19px] h-[28px] bottom-[2px] right-[calc(50%-9px)]"
            />
          ) : (
            <img src={delivery.src} alt="delivery" className="absolute w-[19px] h-[28px] bottom-[2px] -left-[9px]" />
          )}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={image} alt={title} className="w-[48px] h-[48px] object-center object-cover rounded-[6px]" />
          <div className="text-[15px]">
            <span className="font-semibold mx-1">{title}</span>
            {/*<span>({address})</span>*/}
          </div>
        </div>
        <Link href={href} className={orderClassName}>
          <span className="text-[10px] font-medium">مشاهده سفارش</span>
          <IconRoundedLeft className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

export default HomeOrderCard;
