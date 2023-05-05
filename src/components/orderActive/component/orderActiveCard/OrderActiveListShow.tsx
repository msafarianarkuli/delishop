import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {useInView} from "react-intersection-observer";
import {useOrderActiveData} from "components/orderActive/context/OrderActiveDataProvider";
import {instant} from "utils/Const";
import OrderActiveCard from "components/orderActive/component/orderActiveCard/index";

interface IOrderActiveListShow {
  color: "default" | "supermarket";
}

function OrderActiveListShow(props: IOrderActiveListShow) {
  const {color} = props;
  const router = useRouter();
  const {data, fetchNextPage} = useOrderActiveData();
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
              <OrderActiveCard
                color={color}
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

export default OrderActiveListShow;
