import React from "react";
import RestaurantOrderPreviousCard from "view/restaurantOrderPrevious/component/restaurantOrderPreviousCard/RestaurantOrderPreviousCard";
import {useRestaurantOrderPreviousData} from "view/restaurantOrderPrevious/component/context/RestaurantOrderPreviousDataProvider";
import {
  setRestaurantOrderPreviousReceiptData,
  useRestaurantOrderPreviousReceiptAction,
} from "view/restaurantOrderPrevious/component/context/RestaurantOrderPreviousReceiptProvider";

function RestaurantOrderPreviousList() {
  const {data, isLoading} = useRestaurantOrderPreviousData();

  return (
    <div>
      {isLoading ? <div>loading ...</div> : null}
      {!isLoading && !data?.pages?.length ? <div>موردی یافت نشد</div> : null}
      <RestaurantOrderPreviousListShow />
    </div>
  );
}

function RestaurantOrderPreviousListShow() {
  const dispatch = useRestaurantOrderPreviousReceiptAction();
  const {data} = useRestaurantOrderPreviousData();

  return (
    <>
      {data?.pages.map((value) => {
        return value.orders.map((item) => {
          return (
            <RestaurantOrderPreviousCard
              key={item.id}
              id={item.id.toString()}
              title={item.vendor.name}
              receiptNumber={item.id}
              image={item.vendor.logo}
              deliveryTitle={item.address.title || ""}
              coin={15}
              status={item.orderstatus}
              date={item.created_at}
              orders={item.productKinds}
              hasRate
              totalPrice={Math.round(item.topayprice / 10)}
              onClickReceipt={() => {
                dispatch(setRestaurantOrderPreviousReceiptData());
              }}
              onClickReOrder={() => {}}
            />
          );
        });
      })}
    </>
  );
}

export default RestaurantOrderPreviousList;
