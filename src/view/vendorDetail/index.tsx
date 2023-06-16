import {useVendorDetailParams} from "view/vendorDetail/context/VendorDetailParamsProvider";
import VendorDetailSupermarket from "view/vendorDetail/vendorDetailSupermarket";
import VendorDetailRestaurant from "view/vendorDetail/vendorDetailRestaurant";
import VendorDetailSupermarketDataProvider from "view/vendorDetail/vendorDetailSupermarket/context/VendorDetailSupermarketDataProvider";
import VendorDetailRestaurantDataProvider from "view/vendorDetail/vendorDetailRestaurant/context/VendorDetailRestaurantDataProvider";

function VendorDetail() {
  const {isRestaurant, isSupermarket} = useVendorDetailParams();

  if (isRestaurant) {
    return (
      <VendorDetailRestaurantDataProvider>
        <VendorDetailRestaurant />
      </VendorDetailRestaurantDataProvider>
    );
  }
  if (isSupermarket) {
    return (
      <VendorDetailSupermarketDataProvider>
        <VendorDetailSupermarket />
      </VendorDetailSupermarketDataProvider>
    );
  }
  return null;
}

export default VendorDetail;
