import React from "react";
import {useOrderActiveData} from "components/orderActive/context/OrderActiveDataProvider";

function OrderActiveHint() {
  const {data, isLoading} = useOrderActiveData();
  return (
    <>
      {isLoading ? <div className="px-screenSpace">loading ...</div> : null}
      {!isLoading && !data?.pages[0]?.orders.length ? <div className="px-screenSpace">موردی یافت نشد</div> : null}
    </>
  );
}

export default OrderActiveHint;
