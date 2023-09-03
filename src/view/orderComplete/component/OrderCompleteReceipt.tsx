import dayjs from "dayjs";
import jalaliday from "jalaliday";
import useCartRestaurant from "hooks/useCartRestaurant";
import {useMemo} from "react";
import {useOrderComplete} from "view/orderComplete/context/OrderCompleteProvider";
import useDeliveryPrice from "hooks/useDeliveryPrice";
import {useOrderCompleteVendorDetailData} from "view/orderComplete/context/OrderCompleteVendorDetailDataProvider";

dayjs.extend(jalaliday);

function OrderCompleteReceipt() {
  const restaurant = useCartRestaurant();
  const {data} = useOrderCompleteVendorDetailData();
  const {deliveryAddress, discountPrice} = useOrderComplete();

  const {deliveryToman} = useDeliveryPrice({
    location1: {
      lat: data?.lat || 0,
      long: data?.long || 0,
    },
    location2: {
      lat: deliveryAddress?.latitude || 0,
      long: deliveryAddress?.longitude || 0,
    },
  });

  const count = useMemo(() => {
    if (restaurant) return restaurant.totalOrderCount;
    return 0;
  }, [restaurant]);

  const price = useMemo(() => {
    let tmpPrice = 0;
    if (restaurant) tmpPrice = restaurant.totalPrice;
    return Math.round(tmpPrice);
  }, [restaurant]);

  const coin = useMemo(() => {
    if (restaurant) return restaurant.totalPoint;
    return 0;
  }, [restaurant]);

  const discount = useMemo(() => {
    return Math.round((discountPrice || 0) / 10);
  }, [discountPrice]);

  const totalPrice = useMemo(() => {
    return price + deliveryToman - discount;
  }, [deliveryToman, discount, price]);

  return (
    <div className="mt-7 mx-screenSpace bg-[#F2F3F6] py-3 px-2">
      <div className="flex items-center justify-between border-b border-borderColor pb-3">
        <div className="text-primary">جزئیات سفارش</div>
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
        <div className="flex items-center justify-between mb-3">
          <div>میزان تخفیف</div>
          <div>
            <span>{discount.toLocaleString("en-US")}</span>
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
