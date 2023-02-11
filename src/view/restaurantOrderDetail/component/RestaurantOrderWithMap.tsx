import RestaurantOrderFloatPage from "view/restaurantOrderDetail/component/RestaurantOrderFloatPage";
import dynamic from "next/dynamic";
import {useEffect, useState} from "react";

const RestaurantOrderMap = dynamic(() => import("view/restaurantOrderDetail/component/RestaurantOrderMap"), {
  ssr: false,
});

function RestaurantOrderWithMap() {
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
      {!loading ? <RestaurantOrderMap height={mapHeight} /> : null}
      <RestaurantOrderFloatPage height={bottomSheetHeight} />
    </div>
  );
}

export default RestaurantOrderWithMap;
