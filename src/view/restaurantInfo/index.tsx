import RestaurantInfoMap from "view/restaurantInfo/component/RestaurantInfoMap";
import RestaurantInfoHeader from "view/restaurantInfo/component/RestaurantInfoHeader";
import RestaurantInfoAddress from "view/restaurantInfo/component/RestaurantInfoAddress";
import RestaurantInfoDetail from "view/restaurantInfo/component/RestaurantInfoDetail";
import RestaurantInfoCoin from "view/restaurantInfo/component/RestaurantInfoCoin";

function RestaurantInfo() {
  return (
    <>
      <RestaurantInfoHeader />
      <div className="mt-headerNormal">
        <RestaurantInfoMap />
        <RestaurantInfoAddress />
        <RestaurantInfoDetail />
        <RestaurantInfoCoin />
      </div>
    </>
  );
}

export default RestaurantInfo;
