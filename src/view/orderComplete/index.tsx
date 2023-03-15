import {useEffect, useMemo} from "react";
import OrderCompleteHeader from "view/orderComplete/component/OrderCompleteHeader";
import OrderCompleteSubmitBtn from "view/orderComplete/component/OrderCompleteSubmitBtn";
import OrderCompletePartOne from "view/orderComplete/component/OrderCompletePartOne";
import OrderCompletePartTwo from "view/orderComplete/component/OrderCompletePartTwo";
import {useRouter} from "next/router";
import useCartRestaurant from "hooks/useCartRestaurant";
import useCartSupermarket from "hooks/useCartSupermarket";
import {
  setOrderCompleteStep,
  useOrderComplete,
  useOrderCompleteAction,
} from "view/orderComplete/context/OrderCompleteProvider";

function OrderComplete() {
  const router = useRouter();
  const vendor = useCartRestaurant();
  const supermarket = useCartSupermarket();
  const {step} = useOrderComplete();
  const dispatch = useOrderCompleteAction();

  const cartOrders = useMemo(() => {
    if (vendor?.cartOrders) return vendor.cartOrders;
    if (supermarket?.cartOrders) return supermarket.cartOrders;
  }, [supermarket?.cartOrders, vendor?.cartOrders]);

  useEffect(() => {
    window.scrollTo({top: 0});
  }, [step]);

  return (
    <>
      <OrderCompleteHeader
        onClick={() => {
          if (step === 1) {
            router.back();
          } else {
            dispatch(setOrderCompleteStep(1));
          }
        }}
      />
      {cartOrders ? (
        <>
          <div className="mb-[100px]">{step === 1 ? <OrderCompletePartOne /> : <OrderCompletePartTwo />}</div>
          <OrderCompleteSubmitBtn
            step={step}
            onClick={() => {
              dispatch(setOrderCompleteStep(2));
            }}
          />
        </>
      ) : (
        <div className="mt-headerNormal px-screenSpace">موردی یافت نشد</div>
      )}
    </>
  );
}

export default OrderComplete;
