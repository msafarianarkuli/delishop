import React from "react";
import SupermarketCartHeader from "view/supermarketCart/component/SupermarketCartHeader";
import SupermarketCartList from "view/supermarketCart/component/SupermarketCartList";
import SupermarketCartSubmit from "view/supermarketCart/component/SupermarketCartSubmit";

function SupermarketCart() {
  return (
    <>
      <SupermarketCartHeader />
      <div className="mt-headerNormal px-screenSpace mb-[105px]">
        <SupermarketCartList />
      </div>
      <SupermarketCartSubmit />
    </>
  );
}

export default SupermarketCart;
