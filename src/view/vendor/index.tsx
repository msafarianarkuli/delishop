import useRedirectToMap from "hooks/useRedirectToMap";
import VendorHeader from "view/vendor/component/VendorHeader";
import VendorFilter from "view/vendor/component/VendorFilter";
import VendorSort from "view/vendor/component/VendorSort";
import VendorList from "view/vendor/component/VendorList";
import {BottomNavigation} from "components";
import useVendorNavigation from "hooks/useVendorNavigation";
import {useVendorParams} from "view/vendor/context/VendorParamsProvider";

function Vendor() {
  const {vendor} = useVendorParams();
  const data = useVendorNavigation({vendor});
  const {hidePage} = useRedirectToMap();

  if (hidePage) return null;
  return (
    <>
      <div className="fixed z-10 top-0 right-0 left-0 header_background">
        <VendorHeader />
        {vendor === "restaurant" && <VendorFilter />}
        <VendorSort />
      </div>
      <VendorList />
      <div className="w-full h-bottomNavigation" />
      <BottomNavigation data={data} />
    </>
  );
}

export default Vendor;
