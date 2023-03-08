import {useEffect, useState} from "react";
import OrderCompleteHeader from "view/orederComplete/component/OrderCompleteHeader";
import OrderCompleteSubmitBtn from "view/orederComplete/component/OrderCompleteSubmitBtn";
import OrderCompletePartOne from "view/orederComplete/component/OrderCompletePartOne";
import OrderCompletePartTwo from "view/orederComplete/component/OrderCompletePartTwo";
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
