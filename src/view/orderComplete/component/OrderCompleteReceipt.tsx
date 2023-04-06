import dayjs from "dayjs";
import jalaliday from "jalaliday";
import useTypeColor from "hooks/useTypeColor";
import classNames from "classnames";
import useCartRestaurant from "hooks/useCartRestaurant";
import useCartSupermarket from "hooks/useCartSupermarket";
import {useMemo} from "react";
import {useOrderComplete} from "view/orderComplete/context/OrderCompleteProvider";
import useDeliveryPrice from "hooks/useDeliveryPrice";

dayjs.extend(jalaliday);

function OrderCompleteReceipt() {
  const type = useTypeColor();
  const restaurant = useCartRestaurant();
  const supermarket = useCartSupermarket();
  const {deliveryAddress} = useOrderComplete();

  const {deliveryToman} = useDeliveryPrice({
    location1: {
      lat: restaurant?.latitude || supermarket?.latitude || 0,
      long: restaurant?.longitude || supermarket?.longitude || 0,
    },
    location2: {
      lat: deliveryAddress?.latitude || 0,
      long: deliveryAddress?.longitude || 0,
    },
  });

  const count = useMemo(() => {
    if (restaurant) return restaurant.totalOrderCount;
    if (supermarket) return supermarket.totalOrderCount;
    return 0;
  }, [restaurant, supermarket]);

  const price = useMemo(() => {
    let tmpPrice = 0;
    if (restaurant) tmpPrice = restaurant.totalPrice;
    if (supermarket) tmpPrice = supermarket.totalPrice;
    return Math.round(tmpPrice / 10);
  }, [restaurant, supermarket]);

  const coin = useMemo(() => {
    if (restaurant) return restaurant.totalPoint;
    if (supermarket) return supermarket.totalPoint;
    return 0;
  }, [restaurant, supermarket]);

  const totalPrice = useMemo(() => {
    return price + deliveryToman;
  }, [deliveryToman, price]);

  const colorTitle = classNames({
    "text-primary": type === "default",
    "text-primarySupermarket": type === "supermarket",
  });

  return (
    <div className="mt-7 mx-screenSpace bg-[#F2F3F6] py-3 px-2">
      <div className="flex items-center justify-between border-b border-borderColor pb-3">
        <div className={colorTitle}>جزئیات سفارش</div>
        <div className="text-[13px]">{dayjs().calendar("jalali").format("YYYY/MM/DD")}</div>
      </div>
      <div className="border-b border-borderColor py-2">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span>جمع سفارش</span>(<span>{count}</span>)
          </div>
          <div>
            <span>{price?.toLocaleString("en-US")}</span>
            <span className="mr-1">تومان</span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div>هزینه ارسال</div>
          <div>
            <span>{deliveryToman.toLocaleString("en-US")}</span>
            <span className="mr-1">تومان</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>تعداد سکه دریافتی</div>
          <div>
            <span>{coin}</span>
            <span className="mr-1">سکه</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-3">
        <div>جمع کل پرداختی</div>
        <div>
          <span>{totalPrice.toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </div>
      </div>
    </div>
  );
}

export default OrderCompleteReceipt;
