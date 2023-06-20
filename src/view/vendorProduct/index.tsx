import {useVendorProductParams} from "view/vendorProduct/context/VendorProductParamsProvider";
import VendorProductRestaurant from "view/vendorProduct/component/vendorProductRestaurant";
import VendorProductSupermarket from "view/vendorProduct/component/vendorProductSupermarket";

function VendorProduct() {
  const {isRestaurant, isSupermarket} = useVendorProductParams();
  if (isRestaurant) {
    return (
      <>
        <VendorProductRestaurant />
      </>
    );
  }
  if (isSupermarket) {
    return (
      <>
        <VendorProductSupermarket />
      </>
    );
  }
  return null;
}

export default VendorProduct;
