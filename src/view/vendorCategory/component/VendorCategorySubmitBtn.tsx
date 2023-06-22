import {useVendorCategoryListData} from "view/vendorCategory/context/VendorCategoryListDataProvider";
import SubmitBtnToCompleteOrder from "components/submitBtnToCompleteOrder";

function VendorCategorySubmitBtn() {
  const {data} = useVendorCategoryListData();

  return (
    <SubmitBtnToCompleteOrder
      open_hours={data?.vendor.open_hours}
      open={data?.vendor.open}
      className="bottom-bottomNavigation"
    />
  );
}

export default VendorCategorySubmitBtn;
