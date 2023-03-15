import {SubmitBuyBtn} from "components";
import {IconRoundedRight} from "assets/icons";
import {MouseEventHandler} from "react";
import useCartRestaurant from "hooks/useCartRestaurant";
import useCartSupermarket from "hooks/useCartSupermarket";
import useTypeColor from "hooks/useTypeColor";

interface IOrderCompleteSubmitBtn {
  onClick: MouseEventHandler;
  step: number;
}

function OrderCompleteSubmitBtn({onClick, step}: IOrderCompleteSubmitBtn) {
  const restaurant = useCartRestaurant();
  const supermarket = useCartSupermarket();
  const type = useTypeColor();

  return (
    <SubmitBuyBtn
      type={type}
      onClick={onClick}
      right={<IconRoundedRight className="w-5 h-5" />}
      body={
        <>
          {step === 1 ? (
            <>
              <span>ادامه</span>
              <span>({restaurant?.totalOrderCount || supermarket?.totalOrderCount})</span>
            </>
          ) : (
            "پرداخت نهایی"
          )}
        </>
      }
      left={
        <>
          <span>{(restaurant?.totalPrice || supermarket?.totalPrice || 0).toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </>
      }
    />
  );
}

export default OrderCompleteSubmitBtn;
