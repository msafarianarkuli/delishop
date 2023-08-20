import {useMemo} from "react";
import InfoPage from "components/commentInfoPage/infoPage";
import {useVendorInfoRestaurantData} from "view/vendorInfo/context/VendorInfoRestaurantDataProvider";
import {useVendorInfoParams} from "view/vendorInfo/context/VendorInfoParamsProvider";

function VendorInfoRestaurant() {
  const {error, data} = useVendorInfoRestaurantData();
  const {vendor} = useVendorInfoParams();
  const notfound = useMemo(() => {
    return error?.status === 404;
  }, [error?.status]);

  return (
    <InfoPage
      type="restaurant"
      notfound={notfound}
      baseUrl={`/${vendor}`}
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
      about={data?.vendor.about}
    />
  );
}

export default VendorInfoRestaurant;
