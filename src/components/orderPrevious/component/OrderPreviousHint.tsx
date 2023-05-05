import React from "react";
import {useOrderPreviousData} from "components/orderPrevious/context/OrderPreviousDataProvider";

function OrderPreviousHint() {
  const {data, isLoading} = useOrderPreviousData();
  return (
    <>
      {isLoading ? <div className="px-screenSpace">loading ...</div> : null}
      {!isLoading && !data?.pages[0]?.orders.length ? <div className="px-screenSpace">موردی یافت نشد</div> : null}
    </>
  );
}

export default OrderPreviousHint;
