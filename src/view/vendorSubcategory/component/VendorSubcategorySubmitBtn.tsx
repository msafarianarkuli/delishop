import SubmitBtnToCompleteOrder from "components/submitBtnToCompleteOrder";
import {useVendorSubcategoryCategoryListData} from "view/vendorSubcategory/context/VendorSubcategoryCategoryListDataProvider";
import {useVendorSubcategoryParams} from "view/vendorSubcategory/context/VendorSubcategoryParamsProvider";

function VendorSubcategorySubmitBtn() {
  const {data} = useVendorSubcategoryCategoryListData();
  const {vendor} = useVendorSubcategoryParams();

  console.log("data", data?.vendor);

  return (
    <SubmitBtnToCompleteOrder
      vendorName={vendor}
      open_hours={data?.vendor.open_hours}
      open={data?.vendor.open}
      className="bottom-bottomNavigation"
    />
  );
}

export default VendorSubcategorySubmitBtn;
