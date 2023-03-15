import {SubmitBuyBtn} from "components";
import {IconRoundedRight} from "assets/icons";
import useCartRestaurant from "hooks/useCartRestaurant";
import useCartSupermarket from "hooks/useCartSupermarket";
import useTypeColor from "hooks/useTypeColor";
import {
  setOrderCompleteStep,
  useOrderComplete,
  useOrderCompleteAction,
} from "view/orderComplete/context/OrderCompleteProvider";
import {signIn, useSession} from "next-auth/react";

function OrderCompleteSubmitBtnBody() {
  const {step} = useOrderComplete();
  const {status} = useSession();
  const restaurant = useCartRestaurant();
  const supermarket = useCartSupermarket();

  if (step === 2) return <>پرداخت نهایی</>;
  if (status === "authenticated") {
    return (
      <>
        <span>ادامه</span>
        <span>({restaurant?.totalOrderCount || supermarket?.totalOrderCount})</span>
      </>
    );
  } else if (status === "unauthenticated") {
    return (
      <>
        <span>ورود و ادامه</span>
        <span>({restaurant?.totalOrderCount || supermarket?.totalOrderCount})</span>
      </>
    );
  }
  return null;
}

function OrderCompleteSubmitBtnLeft() {
  const restaurant = useCartRestaurant();
  const supermarket = useCartSupermarket();
  return (
    <>
      <span>{(restaurant?.totalPrice || supermarket?.totalPrice || 0).toLocaleString("en-US")}</span>
      <span className="mr-1">تومان</span>
    </>
  );
}

function OrderCompleteSubmitBtn() {
  const type = useTypeColor();
  const dispatch = useOrderCompleteAction();
  const {status} = useSession();

  return (
    <SubmitBuyBtn
      type={type}
      onClick={() => {
        if (status === "authenticated") {
          dispatch(setOrderCompleteStep(2));
        } else if (status === "unauthenticated") {
          signIn();
        }
      }}
      right={<IconRoundedRight className="w-5 h-5" />}
      body={<OrderCompleteSubmitBtnBody />}
      left={<OrderCompleteSubmitBtnLeft />}
    />
  );
}

export default OrderCompleteSubmitBtn;
