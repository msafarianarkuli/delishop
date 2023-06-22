import SubmitBtnToCompleteOrder from "components/submitBtnToCompleteOrder";
import {useVendorSubcategoryCategoryListData} from "view/vendorSubcategory/context/VendorSubcategoryCategoryListDataProvider";

function VendorSubcategorySubmitBtn() {
  const {data} = useVendorSubcategoryCategoryListData();

  console.log("data", data?.vendor);

  return (
    <SubmitBtnToCompleteOrder
      open_hours={data?.vendor.open_hours}
      open={data?.vendor.open}
      className="bottom-bottomNavigation"
    />
  );
}

export default VendorSubcategorySubmitBtn;
