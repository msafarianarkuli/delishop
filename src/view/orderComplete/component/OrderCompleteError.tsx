import React, {useEffect, useRef} from "react";
import {useOrderComplete} from "view/orderComplete/context/OrderCompleteProvider";

function OrderCompleteError() {
  const {error} = useOrderComplete();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (error && ref.current) {
      const div = ref.current as HTMLDivElement;
      div?.scrollIntoView();
    }
  }, [error]);

  if (!error) return null;
  return (
    <div ref={ref} className="my-5 px-screenSpace text-error font-medium text-[14px]">
      {error}
    </div>
  );
}

export default OrderCompleteError;
