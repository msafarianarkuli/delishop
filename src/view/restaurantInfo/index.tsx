import RestaurantInfoMap from "view/restaurantInfo/component/RestaurantInfoMap";
import RestaurantInfoHeader from "view/restaurantInfo/component/RestaurantInfoHeader";
import RestaurantInfoAddress from "view/restaurantInfo/component/RestaurantInfoAddress";
import RestaurantInfoDetail from "view/restaurantInfo/component/RestaurantInfoDetail";

function RestaurantInfo() {
  return (
    <>
      <RestaurantInfoHeader />
      <div className="mt-headerNormal">
        <RestaurantInfoMap />
        <RestaurantInfoAddress />
        <RestaurantInfoDetail />
      </div>
    </>
  );
}

export default RestaurantInfo;
