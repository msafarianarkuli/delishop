import React from "react";
import OrderActiveHint from "components/orderActive/component/OrderActiveHint";
import OrderActiveListShow from "components/orderActive/component/orderActiveCard/OrderActiveListShow";

interface IOrderActiveList {
  color: "default" | "supermarket";
}

function OrderActiveList(props: IOrderActiveList) {
  const {color} = props;
  return (
    <div>
      <OrderActiveHint />
      <OrderActiveListShow color={color} />
    </div>
  );
}

export default OrderActiveList;
