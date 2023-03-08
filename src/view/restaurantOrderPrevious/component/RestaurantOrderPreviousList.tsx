import React from "react";
import RestaurantOrderPreviousCard from "view/restaurantOrderPrevious/component/restaurantOrderPreviousCard/RestaurantOrderPreviousCard";
import img1 from "assets/images/res-order-barger.png";
import {useRestaurantOrderPreviousData} from "view/restaurantOrderPrevious/component/context/RestaurantOrderPreviousDataProvider";
import {
  setRestaurantOrderPreviousReceiptData,
  useRestaurantOrderPreviousReceiptAction,
} from "view/restaurantOrderPrevious/component/context/RestaurantOrderPreviousReceiptProvider";

// const arr = Array.from(new Array(10), (_, i) => ({
//   title: "رستوران آریایی",
//   address: "وردآورد",
//   receiptNumber: 321,
//   image: img.src,
//   deliveryTitle: "دفتر",
//   coin: 15,
//   status: "تحویل شده",
//   date: new Date().toISOString(),
//   orders: Array.from(new Array(10), () => ({
//     price: 98000,
//     image: img1.src,
//   })),
//   hasRate: i % 2 === 0,
// }));

const orders = Array.from(new Array(10), () => ({
  price: 98000,
  image: img1.src,
}));

function RestaurantOrderPreviousList() {
  const {data} = useRestaurantOrderPreviousData();
  const dispatch = useRestaurantOrderPreviousReceiptAction();

  if (!data?.orders.length) return <div className="px-screenSpace">موردی یافت نشد</div>;
  return (
    <div>
      {data?.orders.map((item, index) => {
        return (
          <RestaurantOrderPreviousCard
            key={index}
            id={item.id.toString()}
            title={item.vendor.name}
            receiptNumber={321}
            image={item.vendor.logo}
            deliveryTitle={"دفتر"}
            coin={15}
            status={item.orderstatus}
            date={new Date().toISOString()}
            orders={orders}
            hasRate
            onClickReceipt={() => {
              dispatch(setRestaurantOrderPreviousReceiptData());
            }}
            onClickReOrder={() => {}}
          />
        );
      })}
    </div>
  );
}

export default RestaurantOrderPreviousList;
