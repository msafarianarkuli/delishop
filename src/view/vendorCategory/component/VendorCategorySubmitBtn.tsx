import {useVendorCategoryListData} from "view/vendorCategory/context/VendorCategoryListDataProvider";
import SubmitBtnToCompleteOrder from "components/submitBtnToCompleteOrder";
import {useVendorCategoryParams} from "view/vendorCategory/context/VendorCategoryParamsProvider";

function VendorCategorySubmitBtn() {
  const {data} = useVendorCategoryListData();
  const {vendor} = useVendorCategoryParams();

  return (
    <SubmitBtnToCompleteOrder
      vendorName={vendor}
      open_hours={data?.vendor.open_hours}
      open={data?.vendor.open}
      className="bottom-bottomNavigation"
    />
  );
}

export default VendorCategorySubmitBtn;
