import RestaurantInfoMap from "view/restaurantInfo/component/RestaurantInfoMap";
import RestaurantInfoAddress from "view/restaurantInfo/component/RestaurantInfoAddress";
import RestaurantInfoDetail from "view/restaurantInfo/component/RestaurantInfoDetail";
import RestaurantInfoCoin from "view/restaurantInfo/component/RestaurantInfoCoin";
import {RestaurantInfoAppHeader} from "components";

function RestaurantInfo() {
  return (
    <>
      <RestaurantInfoAppHeader active="info" />
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
