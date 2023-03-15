import {useRestaurantInfoData} from "view/restaurantInfo/context/RestaurantInfoDataProvider";
import {useMemo} from "react";
import InfoPage from "components/commentInfoPage/infoPage";

function RestaurantInfo() {
  const {error, data} = useRestaurantInfoData();
  const notfound = useMemo(() => {
    return error?.status === 404;
  }, [error?.status]);

  return (
    <InfoPage
      type="restaurant"
      notfound={notfound}
      baseUrl="/restaurant"
      point={data?.vendor.point || 0}
      name={data?.vendor.name || ""}
      tags={data?.vendor.tags || []}
      maxSendTime={data?.vendor.max_sendtime || ""}
      minCart={data?.vendor.min_cart || 0}
      openHours={data?.vendor.open_hours}
      address={data?.vendor.address || ""}
      lng={data?.vendor.long || 0}
      lat={data?.vendor.lat || 0}
      open={data?.vendor.open || 0}
      logo={data?.vendor.logo}
    />
  );
}

export default RestaurantInfo;
