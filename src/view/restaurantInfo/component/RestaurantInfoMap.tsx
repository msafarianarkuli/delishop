import {Map} from "components";
import {useRestaurantInfoData} from "view/restaurantInfo/context/RestaurantInfoDataProvider";
import {useMemo} from "react";

function RestaurantInfoMap() {
  const {data} = useRestaurantInfoData();
  const point = useMemo(() => {
    if (data?.vendor?.lat && data?.vendor?.long) {
      return [{lat: data.vendor.lat, lng: data.vendor.long}];
    }
    return [];
  }, [data?.vendor?.lat, data?.vendor?.long]);

  return (
    <>
      <Map className="w-full h-[180px] z-0 rounded-b-[20px] shadow-xl" zoom={17} points={[point]} zoomControl={false} />
    </>
  );
}

export default RestaurantInfoMap;
