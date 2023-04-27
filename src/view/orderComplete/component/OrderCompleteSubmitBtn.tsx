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
import addOrder from "api/addOrder";
import {useRouter} from "next/router";
import {useMemo, useState} from "react";
import {createAddOrderProductKind} from "utils/cartReducerUtils";
import useDeliveryPrice from "hooks/useDeliveryPrice";
import {removeCartRestaurantCartListCartOrder} from "redux/cartRestaurant/cartRestaurantReducer";
import {clearCartSupermarket} from "redux/cartSupermraket/cartSupermarketReducer";
import {useDispatch} from "react-redux";
import {useQueryClient} from "react-query";
import {QUERY_KEY_USER_COIN} from "template/context/UserCoinProvider";

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
  const {deliveryAddress} = useOrderComplete();

  const {deliveryToman} = useDeliveryPrice({
    location1: {
      lat: restaurant?.latitude || supermarket?.latitude || 0,
      long: restaurant?.longitude || supermarket?.longitude || 0,
    },
    location2: {
      lat: deliveryAddress?.latitude || 0,
      long: deliveryAddress?.longitude || 0,
    },
  });

  const price = useMemo(() => {
    const totalPrice = restaurant?.totalPrice || supermarket?.totalPrice || 0;
    return Math.round(totalPrice / 10);
  }, [restaurant?.totalPrice, supermarket?.totalPrice]);

  return (
    <>
      <span>{(price + deliveryToman).toLocaleString("en-US")}</span>
      <span className="mr-1">تومان</span>
    </>
  );
}

function OrderCompleteSubmitBtn() {
  const type = useTypeColor();
  const dispatch = useOrderCompleteAction();
  const dispatchRedux = useDispatch();
  const router = useRouter();
  const {step, paymentType, deliveryAddress, deliveryTime, description, discountCode} = useOrderComplete();
  const {status, data} = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const vendor = useCartRestaurant();
  const supermarket = useCartSupermarket();
  const queryClient = useQueryClient();

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
              vendor_id &&
              Object.keys(productkinds)?.length &&
              location_place_fid != null &&
              paymenttype &&
              sendtime &&
              token;
            if (location_place_fid == null) {
              dispatch(setOrderCompleteError("آدرس مقصد رو مشخص کنید"));
              return true;
            }
            if (addOrderCondition) {
              setIsLoading(true);
              dispatch(setOrderCompleteError(""));
              console.log("productkinds", productkinds);
              const body = new FormData();
              if (location_place_fid) {
                body.append("location_place_fid", location_place_fid.toString());
                // tahvil ba payk
                body.append("delivery_type", "1");
              } else {
                // tahvil hozuri
                body.append("delivery_type", "2");
              }
              body.append("paymenttype", paymenttype.toString());
              body.append("productkinds", JSON.stringify(productkinds));
              body.append("sendtime", sendtime.toString());
              body.append("vendor_id", vendor_id.toString());
              if (description) {
                body.append("description", description);
              }
              if (discountCode) {
                body.append("discountcode", JSON.stringify([discountCode]));
              }
              // const body: IAddOrderBody = {
              //   location_place_fid,
              //   paymenttype,
              //   productkinds,
              //   sendtime,
              //   vendor_id,
              //   description: description || "",
              // };
              addOrder({body, token})
                .then((res) => {
                  console.log("res", res);
                  if (res.data.message) {
                    dispatch(setOrderCompleteError(res.data.message));
                  } else if (res.data.Data) {
                    queryClient.invalidateQueries(QUERY_KEY_USER_COIN);
                    if (res.data.Data?.payurl) {
                      const url = res.data.Data.payurl;
                      window.open(url, "_blank");
                    } else {
                      const id = router.query.id;
                      if (id && !Array.isArray(id)) {
                        if (vendor?.cartOrders) {
                          dispatchRedux(removeCartRestaurantCartListCartOrder(id));
                          router.replace("/restaurant/order/active");
                        } else if (supermarket?.cartOrders) {
                          dispatchRedux(clearCartSupermarket());
                          router.replace("/supermarket");
                        }
                      }
                    }
                  }
                })
                .catch((err) => {
                  console.log("err", err);
                  if (err?.data?.message) {
                    dispatch(setOrderCompleteError(err?.data?.message));
                  } else {
                    dispatch(setOrderCompleteError("مشکلی پیش آمده است دوباره تلاش کنید"));
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
