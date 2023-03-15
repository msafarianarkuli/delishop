import React from "react";
import SupermarketDetailTitle from "view/supermarketDetail/component/SupermarketDetailTitle";
import {useSupermarketDetailData} from "view/supermarketDetail/context/SupermarketDetailDataProvider";

function SupermarketDetailSummary() {
  const {data} = useSupermarketDetailData();
  return (
    <>
      <SupermarketDetailTitle
        title={data?.vendor.name || ""}
        coin={data?.vendor.point || 0}
        image={data?.vendor?.logo}
        rate={data?.vendor?.rate || ""}
        deliveryPrice={6500}
        href={`/supermarket/info/${data?.vendor.id}`}
      />
    </>
  );
}

export default SupermarketDetailSummary;
