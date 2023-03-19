import React from "react";
import {useOrderComplete} from "view/orderComplete/context/OrderCompleteProvider";

function OrderCompleteError() {
  const {error} = useOrderComplete();

  if (!error) return null;
  return <div className="my-5 px-screenSpace text-error font-medium text-[14px]">{error}</div>;
}

export default OrderCompleteError;
