import RestaurantOrderActiveCard from "view/restaurantOrderActive/component/restaurantOrderActiveCard/RestaurantOrderActiveCard";
import {useRouter} from "next/router";
import {useRestaurantOrderActiveData} from "view/restaurantOrderActive/context/RestaurantOrderActiveDataProvider";

function RestaurantOrderActiveList() {
  const {data, isLoading} = useRestaurantOrderActiveData();
  return (
    <div>
      {isLoading ? <div>loading ...</div> : null}
      {!isLoading && !data?.pages?.length ? <div>موردی یافت نشد</div> : null}
      <RestaurantOrderActiveListShow />
    </div>
  );
}

function RestaurantOrderActiveListShow() {
  const router = useRouter();
  const {data} = useRestaurantOrderActiveData();

  return (
    <>
      {data?.pages.map((value) => {
        return value.orders.map((item) => {
          return (
            <RestaurantOrderActiveCard
              key={item.id}
              title={item.vendor.name}
              image={item.vendor.logo}
              deliveryTitle={item.address.title || ""}
              date={item.created_at}
              coin={15}
              receiptNumber={item.id}
              deliveryTime={"15:00"}
              totalPrice={Math.round(item.topayprice / 10)}
              onClickSubmit={() => {
                router.push(`/restaurant/order/${item.id}`);
              }}
            />
          );
        });
      })}
    </>
  );
}

export default RestaurantOrderActiveList;
