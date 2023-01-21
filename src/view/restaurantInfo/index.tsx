import RestaurantInfoMap from "view/restaurantInfo/component/RestaurantInfoMap";
import RestaurantInfoHeader from "view/restaurantInfo/component/RestaurantInfoHeader";
import RestaurantInfoAddress from "view/restaurantInfo/component/RestaurantInfoAddress";

function RestaurantInfo() {
  return (
    <>
      <RestaurantInfoHeader />
      <div className="mt-headerNormal">
        <RestaurantInfoMap />
        <RestaurantInfoAddress />
      </div>
    </>
  );
}

export default RestaurantInfo;
