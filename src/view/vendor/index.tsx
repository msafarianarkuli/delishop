import useRedirectToMap from "hooks/useRedirectToMap";
import VendorHeader from "view/vendor/component/VendorHeader";
import VendorFilter from "view/vendor/component/VendorFilter";
import VendorSort from "view/vendor/component/VendorSort";
import useVendorType from "hooks/useVendorType";
import VendorList from "view/vendor/component/VendorList";
import {BottomNavigation} from "components";
import useRestaurantNavigation from "hooks/useRestaurantNavigation";
import useSupermarketNavigation from "hooks/useSupermarketNavigation";

function Vendor() {
  const restaurantNavigation = useRestaurantNavigation();
  const supermarketNavigation = useSupermarketNavigation();
  const {hidePage} = useRedirectToMap();
  const vendorType = useVendorType();

  if (hidePage) return null;
  return (
    <>
      <div className="fixed z-10 top-0 right-0 left-0 header_background">
        <VendorHeader />
        <VendorFilter />
        <VendorSort />
      </div>
      <VendorList />
      <div className="w-full h-bottomNavigation" />
      <BottomNavigation
        primary={vendorType?.isSupermarket ? "supermarket" : "restaurant"}
        data={vendorType?.isSupermarket ? restaurantNavigation : supermarketNavigation}
      />
    </>
  );
}

export default Vendor;
