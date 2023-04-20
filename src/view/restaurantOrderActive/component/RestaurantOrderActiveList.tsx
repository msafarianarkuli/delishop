import RestaurantOrderActiveCard from "view/restaurantOrderActive/component/restaurantOrderActiveCard/RestaurantOrderActiveCard";
import {useRouter} from "next/router";
import {useRestaurantOrderActiveData} from "view/restaurantOrderActive/context/RestaurantOrderActiveDataProvider";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

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
  const {data, fetchNextPage} = useRestaurantOrderActiveData();
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <>
      {data?.pages.map((value, index, array) => {
        return value.orders.map((item, idx, arr) => {
          const condition = array.length - 1 === index && arr.length - 1 === idx;
          const tmpRef = condition ? ref : null;
          return (
            <div ref={tmpRef} key={item.id}>
              <RestaurantOrderActiveCard
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
            </div>
          );
        });
      })}
    </>
  );
}

export default RestaurantOrderActiveList;
