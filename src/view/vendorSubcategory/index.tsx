import useVendorNavigation from "hooks/useVendorNavigation";
import {useVendorSubcategoryParams} from "view/vendorSubcategory/context/VendorSubcategoryParamsProvider";
import VendorSubcategoryHeader from "view/vendorSubcategory/component/VendorSubcategoryHeader";
import VendorSubcategoryList from "view/vendorSubcategory/component/VendorSubcategoryList";
import {BottomNavigation} from "components";

function VendorSubcategory() {
  const {vendor} = useVendorSubcategoryParams();
  const data = useVendorNavigation({vendor});
  return (
    <>
      <VendorSubcategoryHeader />
      <div className="mt-headerNormal px-screenSpace">
        <VendorSubcategoryList />
        <div className="w-full h-bottomNavigation" />
        <BottomNavigation data={data} />
      </div>
    </>
  );
}

export default VendorSubcategory;
