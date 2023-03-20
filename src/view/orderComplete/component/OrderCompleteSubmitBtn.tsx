import {SubmitBuyBtn} from "components";
import {IconRoundedRight} from "assets/icons";
import useCartRestaurant from "hooks/useCartRestaurant";
import useCartSupermarket from "hooks/useCartSupermarket";
import useTypeColor from "hooks/useTypeColor";
import {
  setOrderCompleteError,
  setOrderCompleteStep,
  useOrderComplete,
  useOrderCompleteAction,
} from "view/orderComplete/context/OrderCompleteProvider";
import {signIn, useSession} from "next-auth/react";
import addOrder, {IAddOrderBody} from "api/addOrder";
import {useRouter} from "next/router";
import {useState} from "react";
import {createAddOrderProductKind} from "utils/cartReducerUtils";

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
  const router = useRouter();
  const {step, paymentType, deliveryAddress, deliveryTime, description} = useOrderComplete();
  const {status, data} = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const vendor = useCartRestaurant();
  const supermarket = useCartSupermarket();

  return (
    <SubmitBuyBtn
      type={type}
      loading={isLoading}
      onClick={() => {
        if (status === "authenticated") {
          const sendtime = deliveryTime?.isTemp ? "100" : deliveryTime?.from;
          if (step === 1) {
            if (!sendtime) {
              dispatch(setOrderCompleteError("زمان تحویل رو مشخص کنید"));
              return true;
            }
            dispatch(setOrderCompleteStep(2));
          } else if (step === 2) {
            let vendor_id = 0;
            const id = router.query.id;
            if (id && !Array.isArray(id)) {
              vendor_id = +id;
            }
            const location_place_fid = deliveryAddress?.id;
            const paymenttype = paymentType;
            // const sendtime = deliveryTime?.isTemp ? 100 : deliveryTime?.from;
            const token = data?.user.token;
            const productkinds = createAddOrderProductKind(vendor?.cartOrders || supermarket?.cartOrders || {});
            const addOrderCondition =
              vendor_id && Object.keys(productkinds)?.length && location_place_fid && paymenttype && sendtime && token;
            if (!location_place_fid) {
              dispatch(setOrderCompleteError("آدرس مقصد رو مشخص کنید"));
              return true;
            }
            if (addOrderCondition) {
              setIsLoading(true);
              const body: IAddOrderBody = {
                location_place_fid,
                paymenttype,
                productkinds,
                sendtime,
                vendor_id,
                description: description || "",
              };
              addOrder({body, token})
                .then((res) => {
                  console.log("res", res);
                  if (res.data.Data?.payurl) {
                  }
                })
                .catch((err) => {
                  console.log("err", err);
                  if (err?.data?.message) {
                    dispatch(setOrderCompleteError(err?.data?.message));
                  }
                })
                .finally(() => setIsLoading(false));
            }
          }
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
