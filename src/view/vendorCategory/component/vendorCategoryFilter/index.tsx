import {CustomModal} from "components";
import {
  setVendorCategoryFilterOpen,
  useVendorCategoryFilter,
  useVendorCategoryFilterAction,
} from "view/vendorCategory/context/VendorCategoryFilterProvider";
import VendorCategoryFilterHeader from "view/vendorCategory/component/vendorCategoryFilter/VendorCategoryFilterHeader";
import VendorCategoryFilterBody from "view/vendorCategory/component/vendorCategoryFilter/VendorCategoryFilterBody";
import VendorCategoryFilterFooter from "view/vendorCategory/component/vendorCategoryFilter/VendorCategoryFilterFooter";

function VendorCategoryFilter() {
  const {isOpen} = useVendorCategoryFilter();
  const dispatch = useVendorCategoryFilterAction();

  if (!isOpen) return null;
  return (
    <CustomModal
      open={isOpen}
      onCancel={() => dispatch(setVendorCategoryFilterOpen(false))}
      header={<VendorCategoryFilterHeader />}
      classNameHeader="bg-transparent border-b border-borderColor"
      body={<VendorCategoryFilterBody />}
      classNameFooter="border-t border-borderColor"
      footer={<VendorCategoryFilterFooter />}
    />
  );
}

export default VendorCategoryFilter;
