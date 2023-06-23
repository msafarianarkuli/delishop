import {useVendorDetailRestaurantData} from "view/vendorDetail/vendorDetailRestaurant/context/VendorDetailRestaurantDataProvider";
import {SubmitBtnToCompleteOrder} from "components";
import {useVendorDetailParams} from "view/vendorDetail/context/VendorDetailParamsProvider";

function VendorDetailRestaurantSubmitBtn() {
  const {data} = useVendorDetailRestaurantData();
  const {vendor} = useVendorDetailParams();

  return <SubmitBtnToCompleteOrder vendorName={vendor} open_hours={data?.vendor.open_hours} open={data?.vendor.open} />;
}

export default VendorDetailRestaurantSubmitBtn;
