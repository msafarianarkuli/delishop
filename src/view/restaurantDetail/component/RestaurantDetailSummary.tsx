import RestaurantDetailTitle from "view/restaurantDetail/component/RestaurantDetailTitle";
import RestaurantDetailDescription from "view/restaurantDetail/component/RestaurantDetailDescription";
import RestaurantDetailTime from "view/restaurantDetail/component/RestaurantDetailTime";
import RestaurantDetailDelivery from "view/restaurantDetail/component/RestaurantDetailDelivery";
import RestaurantDetailMoreInfo from "view/restaurantDetail/component/RestaurantDetailMoreInfo";

function RestaurantDetailSummary() {
  return (
    <>
      <div id="restaurantDetailSummaryTitleDesc" className="pt-6 pb-5 border-b border-borderColor px-screenSpace">
        <RestaurantDetailTitle />
        <RestaurantDetailDescription />
      </div>
      <div className="flex items-center justify-center py-5 border-b border-borderColor px-screenSpace">
        <RestaurantDetailTime />
        <RestaurantDetailDelivery />
        <RestaurantDetailMoreInfo />
      </div>
    </>
  );
}

export default RestaurantDetailSummary;
