import {SubmitBuyBtn} from "components";
import {IconRoundedRight} from "assets/icons";
import {MouseEventHandler} from "react";

interface IOrderCompleteSubmitBtn {
  onClick: MouseEventHandler;
  step: number;
}

function OrderCompleteSubmitBtn({onClick, step}: IOrderCompleteSubmitBtn) {
  return (
    <SubmitBuyBtn
      onClick={onClick}
      right={<IconRoundedRight className="w-5 h-5" />}
      body={<>{step === 1 ? "ادامه(2)" : "پرداخت نهایی"}</>}
      left={
        <>
          {" "}
          <span>{(162500).toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </>
      }
    />
  );
}

export default OrderCompleteSubmitBtn;
