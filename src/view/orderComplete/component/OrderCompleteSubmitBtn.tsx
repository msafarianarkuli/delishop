import {SubmitBuyBtn} from "components";
import {IconRoundedRight} from "assets/icons";
import {MouseEventHandler} from "react";
import useCartRestaurant from "hooks/useCartRestaurant";

interface IOrderCompleteSubmitBtn {
  onClick: MouseEventHandler;
  step: number;
}

function OrderCompleteSubmitBtn({onClick, step}: IOrderCompleteSubmitBtn) {
  const vendor = useCartRestaurant();
  return (
    <SubmitBuyBtn
      onClick={onClick}
      right={<IconRoundedRight className="w-5 h-5" />}
      body={
        <>
          {step === 1 ? (
            <>
              <span>ادامه</span>
              <span>({vendor?.totalOrderCount})</span>
            </>
          ) : (
            "پرداخت نهایی"
          )}
        </>
      }
      left={
        <>
          {" "}
          <span>{(vendor?.totalPrice || 0).toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </>
      }
    />
  );
}

export default OrderCompleteSubmitBtn;
