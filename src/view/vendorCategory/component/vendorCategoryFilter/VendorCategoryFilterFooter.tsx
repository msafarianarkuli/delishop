import {Button} from "antd";
import {useVendorCategoryFilter} from "view/vendorCategory/context/VendorCategoryFilterProvider";

function VendorCategoryFilterFooter() {
  const {isLoading} = useVendorCategoryFilter();

  return (
    <Button
      loading={isLoading}
      htmlType="submit"
      form="categoryFilter"
      type="primary"
      className="submit-btn-supermarket modal-submit-btn w-full rounded-[10px] my-5"
    >
      اعمال فیلتر
    </Button>
  );
}

export default VendorCategoryFilterFooter;
