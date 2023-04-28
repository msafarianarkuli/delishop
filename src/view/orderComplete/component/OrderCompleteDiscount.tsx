import React, {useCallback, useMemo, useState} from "react";
import OrderCompleteTitle from "view/orderComplete/component/OrderCompleteTitle";
import {CustomInput} from "components";
import useTypeColor from "hooks/useTypeColor";
import classNames from "classnames";
import getOrderDiscountCalc from "api/getOrderDiscountCalc";
import {Button} from "antd";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import useCartRestaurant from "hooks/useCartRestaurant";
import useCartSupermarket from "hooks/useCartSupermarket";
import {setOrderCompleteDiscountPrice, useOrderCompleteAction} from "view/orderComplete/context/OrderCompleteProvider";
import {IOrderDiscountCalcError} from "types/interfaceOrderDiscountCalc";

function OrderCompleteDiscount() {
  const type = useTypeColor();
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {data} = useSession();
  const router = useRouter();
  const restaurant = useCartRestaurant();
  const supermarket = useCartSupermarket();
  const dispatch = useOrderCompleteAction();
  const [error, setError] = useState("");

  const price = useMemo(
    () => restaurant?.totalPrice || supermarket?.totalPrice || 0,
    [restaurant?.totalPrice, supermarket?.totalPrice]
  );

  const btnClassName = classNames({
    "h-full w-[140px] rounded-full text-white text-[16px] font-semibold border-0": true,
    "bg-primary": type === "default",
    "bg-primarySupermarket": type === "supermarket",
  });
  const inputClassName = classNames({
    "input-form h-[50px] p-0 pr-2 rounded-full mt-0 overflow-hidden shadow-[2px_2px_14px_rgba(36,65,93,0.33)]": true,
    "input-form-supermarket": type === "supermarket",
  });

  const onClick = useCallback(async () => {
    const id = router.query.id;
    if (data?.user.token && id && !Array.isArray(id) && price) {
      setIsLoading(true);
      setError("");
      try {
        const res = await getOrderDiscountCalc({
          code: text,
          price,
          vendorId: id,
          token: data.user.token,
        });
        dispatch(
          setOrderCompleteDiscountPrice({
            discountPrice: res,
            discountCode: text,
          })
        );
        setIsLoading(false);
      } catch (e: any) {
        if (e.data) {
          const data: IOrderDiscountCalcError = e.data;
          const text = data.errors.code?.join("") || "";
          setError(text);
        }
        setIsLoading(false);
      }
    }
  }, [data?.user.token, dispatch, price, router.query.id, text]);

  return (
    <div className="mt-7">
      <OrderCompleteTitle type={type} title="کد تخفیف" />
      <div className="px-screenSpace">
        <CustomInput
          autoComplete="off"
          id="discount"
          className={inputClassName}
          disabled={isLoading}
          value={text}
          onChange={(event) => {
            const value = event.target.value.trim();
            setText(value);
          }}
          suffix={
            <Button disabled={!text} loading={isLoading} htmlType="button" onClick={onClick} className={btnClassName}>
              ثبت
            </Button>
          }
          placeholder="کد تخفیف خود را وارد نمایید."
        />
        {error ? <div className="my-5 px-screenSpace text-error font-medium text-[14px]">{error}</div> : null}
      </div>
    </div>
  );
}

export default OrderCompleteDiscount;
