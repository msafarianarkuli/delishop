import React from "react";
import SupermarketCartHeader from "view/supermarketCart/component/SupermarketCartHeader";
import SupermarketCartList from "view/supermarketCart/component/SupermarketCartList";
import SupermarketCartSubmit from "view/supermarketCart/component/SupermarketCartSubmit";
import {BottomNavigation} from "components";
import useSupermarketNavigation from "hooks/useSupermarketNavigation";

function SupermarketCart() {
  const data = useSupermarketNavigation("cart");
  return (
    <>
      <SupermarketCartHeader />
      <div className="mt-headerNormal px-screenSpace mb-[165px]">
        <SupermarketCartList />
      </div>
      <SupermarketCartSubmit />
      <BottomNavigation primary="supermarket" data={data} />
    </>
  );
}

export default SupermarketCart;
