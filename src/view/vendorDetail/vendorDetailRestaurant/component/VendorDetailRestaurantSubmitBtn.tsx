import {useVendorDetailRestaurantData} from "view/vendorDetail/vendorDetailRestaurant/context/VendorDetailRestaurantDataProvider";
import {SubmitBtnToCompleteOrder} from "components";

function VendorDetailRestaurantSubmitBtn() {
  const {data} = useVendorDetailRestaurantData();

  return <SubmitBtnToCompleteOrder open_hours={data?.vendor.open_hours} open={data?.vendor.open} />;
}

export default VendorDetailRestaurantSubmitBtn;
