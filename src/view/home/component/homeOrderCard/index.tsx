import styles from "view/home/component/homeOrderCard/homeOrderCard.module.scss";
import accept from "assets/images/pin-order-accept.svg";
import delivery from "assets/images/pin-order-delivery.svg";
import Link from "next/link";
import {IconRoundedLeft} from "assets/icons";

interface IHomeOrderCard {
  deliveryTime: string;
  image?: string;
  title: string;
  id: number;
  orderStatus: number;
}

function HomeOrderCard(props: IHomeOrderCard) {
  const {deliveryTime, image, title, id, orderStatus} = props;

  return (
    <div className={styles.home_order_card_container}>
      <div className="flex items-center justify-between">
        <div className="text-[15px] font-medium pl-1 underline">سفارش شما در حال آماده سازی می باشد.</div>
        <div className="font-semibold whitespace-nowrap">
          <div className="text-[11px] mb-2">تحویل تا ساعت:</div>
          <div className="inner_box text-[13px] text-center text-primary">{deliveryTime}</div>
        </div>
      </div>
      <div className="mt-12 mb-9 mx-7">
        <div className="relative w-full h-[4px] bg-[#D9D9D9] rounded-full">
          <div
            className="absolute right-0 top-0 h-full bg-textColor rounded-full transition-width duration-300 ease-linear"
            style={{width: orderStatus === 3 || orderStatus === 4 ? "50%" : "100%"}}
          />
          {orderStatus === 3 || orderStatus === 4 ? (
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
        <Link href={`/restaurant/order/${id}?map=1`} target="_blank" className="flex items-center text-primary">
          <span className="text-[15px] font-semibold">مشاهده سفارش</span>
          <IconRoundedLeft className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

export default HomeOrderCard;
