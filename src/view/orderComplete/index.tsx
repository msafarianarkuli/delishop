import {useEffect, useMemo} from "react";
import OrderCompleteHeader from "view/orderComplete/component/OrderCompleteHeader";
import OrderCompleteSubmitBtn from "view/orderComplete/component/OrderCompleteSubmitBtn";
import OrderCompletePartOne from "view/orderComplete/component/OrderCompletePartOne";
import OrderCompletePartTwo from "view/orderComplete/component/OrderCompletePartTwo";
import useCartRestaurant from "hooks/useCartRestaurant";
import {useOrderComplete} from "view/orderComplete/context/OrderCompleteProvider";

function OrderComplete() {
  const vendor = useCartRestaurant();
  const {step} = useOrderComplete();

  const cartOrders = useMemo(() => {
    if (vendor?.cartOrders) return vendor.cartOrders;
  }, [vendor?.cartOrders]);

  useEffect(() => {
    window.scrollTo({top: 0});
  }, [step]);

  return (
    <>
      <OrderCompleteHeader />
      {cartOrders ? (
        <>
          <div className="mb-[100px]">{step === 1 ? <OrderCompletePartOne /> : <OrderCompletePartTwo />}</div>
          <OrderCompleteSubmitBtn />
        </>
      ) : (
        <div className="mt-headerNormal px-screenSpace">موردی یافت نشد</div>
      )}
    </>
  );
}

export default OrderComplete;
