import RestaurantOrderActiveCard from "view/restaurantOrderActive/component/restaurantOrderActiveCard/RestaurantOrderActiveCard";
import {useRouter} from "next/router";
import {useRestaurantOrderActiveData} from "view/restaurantOrderActive/context/RestaurantOrderActiveDataProvider";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {instant} from "utils/Const";

function RestaurantOrderActiveList() {
  const {data, isLoading} = useRestaurantOrderActiveData();
  return (
    <div>
      {isLoading ? <div className="px-screenSpace">loading ...</div> : null}
      {!isLoading && !data?.pages[0]?.orders.length ? <div className="px-screenSpace">موردی یافت نشد</div> : null}
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
                orderStatus={item.orderstatus}
                date={item.created_at}
                coin={15}
                receiptNumber={item.id}
                deliveryTime={item.sendtime.toString() === "100" ? instant : item.sendtime.toString()}
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
