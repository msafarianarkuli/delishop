import {useEffect, useMemo, useState} from "react";
import OrderCompleteHeader from "view/orderComplete/component/OrderCompleteHeader";
import OrderCompleteSubmitBtn from "view/orderComplete/component/OrderCompleteSubmitBtn";
import OrderCompletePartOne from "view/orderComplete/component/OrderCompletePartOne";
import OrderCompletePartTwo from "view/orderComplete/component/OrderCompletePartTwo";
import {useRouter} from "next/router";
import useCartRestaurant from "hooks/useCartRestaurant";
import useCartSupermarket from "hooks/useCartSupermarket";

function OrderComplete() {
  const router = useRouter();
  const [state, setState] = useState<number>(1);
  const vendor = useCartRestaurant();
  const supermarket = useCartSupermarket();

  const cartOrders = useMemo(() => {
    if (vendor?.cartOrders) return vendor.cartOrders;
    if (supermarket?.cartOrders) return supermarket.cartOrders;
  }, [supermarket?.cartOrders, vendor?.cartOrders]);

  useEffect(() => {
    window.scrollTo({top: 0});
  }, [state]);

  return (
    <>
      <OrderCompleteHeader
        onClick={() => {
          if (state === 1) {
            router.back();
          } else {
            setState(1);
          }
        }}
      />
      {cartOrders ? (
        <>
          <div className="mb-[100px]">{state === 1 ? <OrderCompletePartOne /> : <OrderCompletePartTwo />}</div>
          <OrderCompleteSubmitBtn
            step={state}
            onClick={() => {
              setState(2);
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
