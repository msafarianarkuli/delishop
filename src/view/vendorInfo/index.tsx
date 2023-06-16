import {useVendorInfoParams} from "view/vendorInfo/context/VendorInfoParamsProvider";
import VendorInfoRestaurant from "view/vendorInfo/component/VendorInfoRestaurant";
import VendorInfoSupermarket from "view/vendorInfo/component/VendorInfoSupermarket";
import VendorInfoRestaurantDataProvider from "view/vendorInfo/context/VendorInfoRestaurantDataProvider";
import VendorInfoSupermarketDataProvider from "view/vendorInfo/context/VendorInfoSupermarketDataProvider";

function VendorInfo() {
  const {isRestaurant, isSupermarket} = useVendorInfoParams();
  if (isRestaurant) {
    return (
      <VendorInfoRestaurantDataProvider>
        <VendorInfoRestaurant />
      </VendorInfoRestaurantDataProvider>
    );
  }
  if (isSupermarket) {
    return (
      <VendorInfoSupermarketDataProvider>
        <VendorInfoSupermarket />
      </VendorInfoSupermarketDataProvider>
    );
  }
  return null;
}

export default VendorInfo;
