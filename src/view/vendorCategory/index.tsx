import VendorCategoryFilterProvider from "view/vendorCategory/context/VendorCategoryFilterProvider";
import useVendorNavigation from "hooks/useVendorNavigation";
import {useVendorCategoryParams} from "view/vendorCategory/context/VendorCategoryParamsProvider";
import VendorCategoryHeader from "view/vendorCategory/component/VendorCategoryHeader";
import VendorCategoryProductsList from "view/vendorCategory/component/VendorCategoryProductsList";
import VendorCategoryFilter from "view/vendorCategory/component/vendorCategoryFilter";
import {BottomNavigation, BottomPageGradient} from "components";
import VendorCategorySubcategory from "view/vendorCategory/component/VendorCategorySubcategory";

function VendorCategory() {
  const {vendor} = useVendorCategoryParams();
  const data = useVendorNavigation({vendor});

  return (
    <VendorCategoryFilterProvider>
      <VendorCategoryHeader />
      <div className="mt-headerNormal">
        <VendorCategorySubcategory />
        <VendorCategoryProductsList />
      </div>
      <VendorCategoryFilter />
      <BottomPageGradient />
      <div className="w-full h-bottomNavigation" />
      <BottomNavigation data={data} />
    </VendorCategoryFilterProvider>
  );
}

export default VendorCategory;
