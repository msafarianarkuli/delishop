import {useVendorDetailParams} from "view/vendorDetail/context/VendorDetailParamsProvider";
import VendorDetailSupermarket from "view/vendorDetail/vendorDetailSupermarket";
import VendorDetailRestaurant from "view/vendorDetail/vendorDetailRestaurant";

function VendorDetail() {
  const {isRestaurant, isSupermarket} = useVendorDetailParams();

  if (isRestaurant) {
    return <VendorDetailRestaurant />;
  }
  if (isSupermarket) {
    return <VendorDetailSupermarket />;
  }
  return null;
}

export default VendorDetail;
