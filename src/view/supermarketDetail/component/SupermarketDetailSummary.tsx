import React from "react";
import SupermarketDetailTitle from "view/supermarketDetail/component/SupermarketDetailTitle";
import {useSupermarketDetailData} from "view/supermarketDetail/context/SupermarketDetailDataProvider";
import useDeliveryPrice from "hooks/useDeliveryPrice";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";

function SupermarketDetailSummary() {
  const {data} = useSupermarketDetailData();
  const {userAddress, location} = useSelector(selectAddressMap);
  const {deliveryToman} = useDeliveryPrice({
    location1: {
      lat: userAddress?.latitude || location?.lat || 0,
      long: userAddress?.longitude || location?.lng || 0,
    },
    location2: {
      lat: data?.vendor.lat || 0,
      long: data?.vendor.long || 0,
    },
  });

  return (
    <>
      <SupermarketDetailTitle
        title={data?.vendor.name || ""}
        coin={data?.vendor.point || 0}
        image={data?.vendor?.logo}
        rate={data?.vendor?.rate || ""}
        deliveryPrice={deliveryToman}
        href={`/supermarket/info/${data?.vendor.id}`}
      />
    </>
  );
}

export default SupermarketDetailSummary;
