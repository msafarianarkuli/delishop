import {useEffect, useState} from "react";
import OrderDetailMap from "view/orderDetail/component/OrderDetailMap";
import OrderDetailFloatPage from "view/orderDetail/component/OrderDetailFloatPage";

function OrderDetailWithMap() {
  const [loading, setLoading] = useState(true);
  const [bottomSheetHeight, setBottomSheetHeight] = useState(0);
  const [mapHeight, setMapHeight] = useState(0);

  useEffect(() => {
    const div = document.getElementById("restaurantOrderDetailContentPartOne") as HTMLDivElement;
    const clientHeight = window.innerHeight;
    const initialHeight = 36 + 20;
    const bottomSheetHeight = div.scrollHeight + initialHeight;
    const mapHeight = clientHeight - bottomSheetHeight;
    setBottomSheetHeight(div.scrollHeight + initialHeight);
    setMapHeight(mapHeight);
    setLoading(false);
  }, []);

  return (
    <div className="relative h-screen">
      {!loading ? <OrderDetailMap height={mapHeight} /> : null}
      <OrderDetailFloatPage height={bottomSheetHeight} />
    </div>
  );
}

export default OrderDetailWithMap;
