import React from "react";
import RestaurantOrderActiveCard from "view/restaurantOrderActive/component/restaurantOrderActiveCard/RestaurantOrderActiveCard";
import {useRouter} from "next/router";
import {useRestaurantOrderActiveData} from "view/restaurantOrderActive/context/RestaurantOrderActiveDataProvider";

// const arr = Array.from(new Array(10), () => ({
//   title: "رستوران آریایی",
//   address: "وردآورد",
//   image: img.src,
//   deliveryTitle: "دفتر",
//   date: new Date().toISOString(),
//   coin: 15,
//   receiptNumber: 321,
//   deliveryTime: "15:00",
// }));

function RestaurantOrderActiveList() {
  const router = useRouter();
  const {data} = useRestaurantOrderActiveData();
  if (!data?.orders.length) return <div>موردی یافت نشد</div>;
  return (
    <div>
      {data?.orders.map((item, index) => {
        return (
          <RestaurantOrderActiveCard
            key={index}
            title={item.vendor.name}
            image={item.vendor.logo}
            deliveryTitle="دفتر"
            date={new Date().toISOString()}
            coin={15}
            receiptNumber={321}
            deliveryTime={"15:00"}
            onClickSubmit={() => {
              router.push(`/restaurant/order/${index + 1}`);
            }}
          />
        );
      })}
    </div>
  );
}

export default RestaurantOrderActiveList;
