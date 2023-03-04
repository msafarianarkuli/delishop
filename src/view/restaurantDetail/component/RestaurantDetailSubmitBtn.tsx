import {IconDownload} from "assets/icons";
import {useRouter} from "next/router";
import {SubmitBuyBtn} from "components";
import {useSelector} from "react-redux";
import {selectCartTotalOrderCount, selectCartTotalPrice} from "redux/cart/cartReducer";

function RestaurantDetailSubmitBtnBody() {
  const totalOrderCount = useSelector(selectCartTotalOrderCount);
  return (
    <>
      <span>تکمیل خرید</span>(<span>{totalOrderCount}</span>)
    </>
  );
}

function RestaurantDetailSubmitBtn() {
  const router = useRouter();
  const totalPrice = useSelector(selectCartTotalPrice);
  if (!totalPrice) return null;
  return (
    <SubmitBuyBtn
      onClick={() => router.push("/restaurant/complete")}
      right={<IconDownload className="w-5 h-5" />}
      body={<RestaurantDetailSubmitBtnBody />}
      left={
        <>
          {" "}
          <span>{totalPrice.toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </>
      }
    />
  );
}

export default RestaurantDetailSubmitBtn;
