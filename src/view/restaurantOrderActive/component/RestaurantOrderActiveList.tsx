import React from "react";
import RestaurantOrderActiveCard from "view/restaurantOrderActive/component/restaurantOrderActiveCard/RestaurantOrderActiveCard";
import {useRouter} from "next/router";
import {useRestaurantOrderActiveData} from "view/restaurantOrderActive/context/RestaurantOrderActiveDataProvider";
import {IGetOrdersListResOrders} from "types/interfaceOdrdersList";

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
  const {data, isLoading} = useRestaurantOrderActiveData();
  return (
    <div>
      {isLoading ? <div>loading ...</div> : null}
      {!isLoading && data && !data.orders.length ? <div>موردی یافت نشد</div> : null}
      <RestaurantOrderActiveListShow data={data?.orders} />
    </div>
  );
}

function RestaurantOrderActiveListShow({data}: {data?: IGetOrdersListResOrders}) {
  const router = useRouter();

  return (
    <>
      {data?.map((item, index) => {
        return (
          <RestaurantOrderActiveCard
            key={index}
            title={item.vendor.name}
            image={item.vendor.logo}
            deliveryTitle="دفتر"
            date={new Date().toISOString()}
            coin={15}
            receiptNumber={item.id}
            deliveryTime={"15:00"}
            totalPrice={Math.round(item.topayprice / 10)}
            onClickSubmit={() => {
              router.push(`/restaurant/order/${index + 1}`);
            }}
          />
        );
      })}
    </>
  );
}

export default RestaurantOrderActiveList;
