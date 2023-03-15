import React from "react";
import OrderCompleteTitle from "view/orderComplete/component/OrderCompleteTitle";
import {CustomInput} from "components";
import useTypeColor from "hooks/useTypeColor";
import classNames from "classnames";

function OrderCompleteDiscount() {
  const type = useTypeColor();
  const btnClassName = classNames({
    "h-full w-[140px] rounded-full text-white text-[16px] font-semibold": true,
    "bg-primary": type === "default",
    "bg-primarySupermarket": type === "supermarket",
  });
  const inputClassName = classNames({
    "input-form h-[50px] p-0 pr-2 rounded-full mt-0 overflow-hidden shadow-[2px_2px_14px_rgba(36,65,93,0.33)]": true,
    "input-form-supermarket": type === "supermarket",
  });
  return (
    <div className="mt-7">
      <OrderCompleteTitle type={type} title="کد تخفیف" />
      <div className="px-screenSpace">
        <CustomInput
          autoComplete="off"
          id="discount"
          className={inputClassName}
          suffix={<button className={btnClassName}>ثبت</button>}
          placeholder="کد تخفیف خود را وارد نمایید."
        />
      </div>
    </div>
  );
}

export default OrderCompleteDiscount;
