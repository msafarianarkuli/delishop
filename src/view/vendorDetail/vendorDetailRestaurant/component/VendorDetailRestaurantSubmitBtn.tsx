import React from "react";
import {useRouter} from "next/router";
import useCartRestaurant from "hooks/useCartRestaurant";
import useVendorWorkTime from "hooks/useVendorWorkTime";
import {SubmitBuyBtn} from "components";
import {IconDownload} from "assets/icons";
import {useVendorDetailRestaurantData} from "view/vendorDetail/vendorDetailRestaurant/context/VendorDetailRestaurantDataProvider";

function VendorDetailRestaurantSubmitBtn() {
  const router = useRouter();
  const vendor = useCartRestaurant();
  const {data} = useVendorDetailRestaurantData();
  const {time} = useVendorWorkTime({open_hours: data?.vendor.open_hours});

  if (!vendor?.totalPrice) return null;
  return (
    <SubmitBuyBtn
      disabled={!time.length || !data?.vendor.open}
      onClick={() => router.push(`/ordercomplete/${router.query.id}`)}
      right={<IconDownload className="w-5 h-5" />}
      body={
        <>
          <span>تکمیل خرید</span>(<span>{vendor.totalOrderCount}</span>)
        </>
      }
      left={
        <>
          <span>{Math.round(vendor.totalPrice / 10).toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </>
      }
    />
  );
}

export default VendorDetailRestaurantSubmitBtn;
