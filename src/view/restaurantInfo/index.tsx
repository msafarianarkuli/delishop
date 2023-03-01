import RestaurantInfoMap from "view/restaurantInfo/component/RestaurantInfoMap";
import RestaurantInfoAddress from "view/restaurantInfo/component/RestaurantInfoAddress";
import RestaurantInfoDetail from "view/restaurantInfo/component/RestaurantInfoDetail";
import RestaurantInfoCoin from "view/restaurantInfo/component/RestaurantInfoCoin";
import {RestaurantInfoAppHeader} from "components";
import {useRestaurantInfoData} from "view/restaurantInfo/context/RestaurantInfoDataProvider";
import {useMemo} from "react";

function RestaurantInfo() {
  const {error} = useRestaurantInfoData();
  const notFound = useMemo(() => {
    return error?.status === 404;
  }, [error?.status]);

  return (
    <>
      <RestaurantInfoAppHeader active="info" />
      <div className="mt-headerNormal">
        {notFound ? (
          <div>not found</div>
        ) : (
          <>
            <RestaurantInfoMap />
            <RestaurantInfoAddress />
            <RestaurantInfoDetail />
            <RestaurantInfoCoin />
          </>
        )}
      </div>
    </>
  );
}

export default RestaurantInfo;
