import {IconDownload} from "assets/icons";
import {useRouter} from "next/router";
import {SubmitBuyBtn} from "components";
import useCartRestaurant from "hooks/useCartRestaurant";

function RestaurantDetailSubmitBtn() {
  const router = useRouter();
  const vendor = useCartRestaurant();

  if (!vendor?.totalPrice) return null;
  return (
    <SubmitBuyBtn
      onClick={() => router.push("/restaurant/complete")}
      right={<IconDownload className="w-5 h-5" />}
      body={
        <>
          <span>تکمیل خرید</span>(<span>{vendor.totalOrderCount}</span>)
        </>
      }
      left={
        <>
          {" "}
          <span>{vendor.totalPrice.toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </>
      }
    />
  );
}

export default RestaurantDetailSubmitBtn;
