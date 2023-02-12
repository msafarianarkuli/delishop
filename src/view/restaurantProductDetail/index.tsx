import RestaurantProductDetailHeader from "view/restaurantProductDetail/component/RestaurantProductDetailHeader";
import RestaurantProductDetailSwiper from "view/restaurantProductDetail/component/RestaurantProductDetailSwiper";
import RestaurantProductDetailTitle from "view/restaurantProductDetail/component/RestaurantProductDetailTitle";
import RestaurantProductDetailDescription from "view/restaurantProductDetail/component/RestaurantProductDetailDescription";
import RestaurantProductDetailPrice from "view/restaurantProductDetail/component/RestaurantProductDetailPrice";
import RestaurantProductDetailComment from "view/restaurantProductDetail/component/RestaurantProductDetailComment";
import RestaurantProductDetailExtra from "view/restaurantProductDetail/component/RestaurantProductDetailExtra";

function RestaurantProductDetail() {
  return (
    <>
      <RestaurantProductDetailHeader />
      <div className="mt-headerNormal">
        <RestaurantProductDetailSwiper />
        <RestaurantProductDetailTitle />
        <RestaurantProductDetailDescription />
        <RestaurantProductDetailPrice />
        <RestaurantProductDetailExtra />
        <RestaurantProductDetailComment />
      </div>
    </>
  );
}

export default RestaurantProductDetail;
