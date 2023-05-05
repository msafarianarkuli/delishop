import {useRouter} from "next/router";
import {useOrderDetailData} from "view/orderDetail/context/OrderDetailDataProvider";
import OrderDetailWithMap from "view/orderDetail/component/OrderDetailWithMap";
import OrderDetailContent from "view/orderDetail/component/OrderDetailContent";

function OrderDetail() {
  const router = useRouter();
  const {data, isLoading} = useOrderDetailData();

  if (!isLoading && data == undefined) return null;
  if (isLoading) {
    return <div className="px-screenSpace">loading...</div>;
  } else if (!data) {
    return <div className="px-screenSpace">موردی یافت نشد</div>;
  } else {
    if (router.query?.map) {
      return <OrderDetailWithMap />;
    } else {
      return <OrderDetailContent />;
    }
  }
}

export default OrderDetail;
