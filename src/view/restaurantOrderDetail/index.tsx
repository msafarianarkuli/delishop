import {useRouter} from "next/router";
import RestaurantOrderWithMap from "view/restaurantOrderDetail/component/RestaurantOrderWithMap";
import RestaurantOrderDetailContent from "view/restaurantOrderDetail/component/RestaurantOrderDetailContent";
import {useRestaurantOrderDetailData} from "view/restaurantOrderDetail/context/RestaurantOrderDetailDataProvider";

function RestaurantOrderDetail() {
  const router = useRouter();
  const {data, isLoading} = useRestaurantOrderDetailData();

  if (!isLoading && data == undefined) return null;
  if (isLoading) {
    return <div className="px-screenSpace">loading...</div>;
  } else if (!data) {
    return <div className="px-screenSpace">موردی یافت نشد</div>;
  } else {
    if (router.query?.map) {
      return <RestaurantOrderWithMap />;
    } else {
      return <RestaurantOrderDetailContent />;
    }
  }
}

export default RestaurantOrderDetail;
