import React from "react";
import OrderCompleteTitle from "view/orederComplete/component/OrderCompleteTitle";
import {CustomInput} from "components";

function OrderCompleteDiscount() {
  return (
    <div className="mt-7">
      <OrderCompleteTitle title="کد تخفیف" />
      <div className="px-screenSpace">
        <CustomInput
          autoComplete="off"
          id="discount"
          className="input-form h-[50px] p-0 pr-2 rounded-full mt-0 overflow-hidden shadow-[2px_2px_14px_rgba(36,65,93,0.33)]"
          suffix={
            <button className="bg-primary h-full w-[140px] rounded-full text-white text-[16px] font-semibold">
              ثبت
            </button>
          }
          placeholder="کد تخفیف خود را وارد نمایید."
        />
      </div>
    </div>
  );
}

export default OrderCompleteDiscount;
