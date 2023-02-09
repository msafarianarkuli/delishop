import {useRouter} from "next/router";
import RestaurantOrderWithMap from "view/restaurantOrderDetail/component/RestaurantOrderWithMap";
import RestaurantOrderDetailContent from "view/restaurantOrderDetail/component/RestaurantOrderDetailContent";

function RestaurantOrderDetail() {
  const router = useRouter();

  if (router.query?.map) return <RestaurantOrderWithMap />;
  return <RestaurantOrderDetailContent />;
}

export default RestaurantOrderDetail;
