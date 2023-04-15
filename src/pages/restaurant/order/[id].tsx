import RestaurantOrderDetail from "view/restaurantOrderDetail";
import RestaurantOrderDetailDataProvider from "view/restaurantOrderDetail/component/RestaurantOrderDetailDataProvider";

function RestaurantOrderDetailPage() {
  return (
    <RestaurantOrderDetailDataProvider>
      <RestaurantOrderDetail />
    </RestaurantOrderDetailDataProvider>
  );
}

export default RestaurantOrderDetailPage;
