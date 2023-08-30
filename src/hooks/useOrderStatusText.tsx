import {useMemo} from "react";
import {EOrderStatus} from "utils/Const";

function useOrderStatusText(orderStatus: number) {
  return useMemo(() => {
    if (orderStatus === EOrderStatus.confirmed) {
      return "سفارش شما تایید شد.";
    } else if (orderStatus === EOrderStatus.ready || orderStatus === EOrderStatus.sent) {
      return "سفارش شما تحویل پیک شد.";
    }
    return "";
  }, [orderStatus]);
}

export default useOrderStatusText;
