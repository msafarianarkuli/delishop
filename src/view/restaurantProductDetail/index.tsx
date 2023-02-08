import RestaurantProductDetailHeader from "view/restaurantProductDetail/component/RestaurantProductDetailHeader";
import RestaurantProductDetailSwiper from "view/restaurantProductDetail/component/RestaurantProductDetailSwiper";

function RestaurantProductDetail() {
  return (
    <>
      <RestaurantProductDetailHeader />
      <div className="mt-headerNormal">
        <RestaurantProductDetailSwiper />
      </div>
    </>
  );
}

export default RestaurantProductDetail;
