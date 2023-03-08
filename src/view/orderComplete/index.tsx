import {useEffect, useState} from "react";
import OrderCompleteHeader from "view/orderComplete/component/OrderCompleteHeader";
import OrderCompleteSubmitBtn from "view/orderComplete/component/OrderCompleteSubmitBtn";
import OrderCompletePartOne from "view/orderComplete/component/OrderCompletePartOne";
import OrderCompletePartTwo from "view/orderComplete/component/OrderCompletePartTwo";
import {useRouter} from "next/router";

function OrderComplete() {
  const router = useRouter();
  const [state, setState] = useState<number>(1);

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
      <div className="mb-[100px]">{state === 1 ? <OrderCompletePartOne /> : <OrderCompletePartTwo />}</div>
      <OrderCompleteSubmitBtn
        step={state}
        onClick={() => {
          setState(2);
        }}
      />
    </>
  );
}

export default OrderComplete;
