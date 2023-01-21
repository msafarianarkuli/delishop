import RestaurantInfoMap from "view/restaurantInfo/component/RestaurantInfoMap";
import RestaurantInfoHeader from "view/restaurantInfo/component/RestaurantInfoHeader";

function RestaurantInfo() {
  return (
    <>
      <RestaurantInfoHeader />
      <div className="mt-headerNormal">
        <RestaurantInfoMap />
      </div>
    </>
  );
}

export default RestaurantInfo;
