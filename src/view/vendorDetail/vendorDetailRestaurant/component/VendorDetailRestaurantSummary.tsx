import {useVendorDetailRestaurantData} from "view/vendorDetail/vendorDetailRestaurant/context/VendorDetailRestaurantDataProvider";
import VendorDetailRestaurantDescription from "view/vendorDetail/vendorDetailRestaurant/component/VendorDetailRestaurantDescription";
import VendorDetailRestaurantDelivery from "view/vendorDetail/vendorDetailRestaurant/component/VendorDetailRestaurantDelivery";
import VendorDetailRestaurantMoreInfo from "view/vendorDetail/vendorDetailRestaurant/component/VendorDetailRestaurantMoreInfo";
import VendorDetailRestaurantTitle from "view/vendorDetail/vendorDetailRestaurant/component/VendorDetailRestaurantTitle";
import VendorDetailRestaurantTime from "view/vendorDetail/vendorDetailRestaurant/component/VendorDetailRestaurantTime";

function VendorDetailRestaurantSummary() {
  const {data} = useVendorDetailRestaurantData();

  return (
    <>
      <div id="restaurantDetailSummaryTitleDesc" className="pt-6 pb-5 border-b border-borderColor px-screenSpace">
        <VendorDetailRestaurantTitle />
        <VendorDetailRestaurantDescription />
      </div>
      <div className="flex items-center justify-center py-5 border-b border-borderColor px-screenSpace">
        <VendorDetailRestaurantTime maxSendTime={data?.vendor.max_sendtime || ""} />
        <VendorDetailRestaurantDelivery lat={data?.vendor.lat || 0} long={data?.vendor.long || 0} />
        <VendorDetailRestaurantMoreInfo />
      </div>
    </>
  );
}

export default VendorDetailRestaurantSummary;
