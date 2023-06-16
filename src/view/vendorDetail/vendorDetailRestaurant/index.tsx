import {useVendorDetailRestaurantData} from "view/vendorDetail/vendorDetailRestaurant/context/VendorDetailRestaurantDataProvider";
import VendorDetailRestaurantExtraProvider from "view/vendorDetail/vendorDetailRestaurant/context/VendorDetailRestaurantExtraProvider";
import VendorDetailRestaurantHeader from "view/vendorDetail/vendorDetailRestaurant/component/VendorDetailRestaurantHeader";
import VendorDetailRestaurantImageHeader from "view/vendorDetail/vendorDetailRestaurant/component/VendorDetailRestaurantImageHeader";
import VendorDetailRestaurantSummary from "view/vendorDetail/vendorDetailRestaurant/component/VendorDetailRestaurantSummary";
import VendorDetailRestaurantTab from "view/vendorDetail/vendorDetailRestaurant/component/VendorDetailRestaurantTab";
import VendorDetailRestaurantList from "view/vendorDetail/vendorDetailRestaurant/component/VendorDetailRestaurantList";
import VendorDetailRestaurantSubmitBtn from "view/vendorDetail/vendorDetailRestaurant/component/VendorDetailRestaurantSubmitBtn";
import VendorDetailRestaurantModal from "view/vendorDetail/vendorDetailRestaurant/component/vendorDetailRestaurantModal";
import {BottomPageGradient} from "components";

function VendorDetailRestaurant() {
  const {error} = useVendorDetailRestaurantData();

  if (error?.status === 404) {
    return <div>موردی یافت نشد</div>;
  }
  return (
    <VendorDetailRestaurantExtraProvider>
      <VendorDetailRestaurantHeader />
      <VendorDetailRestaurantImageHeader />
      <VendorDetailRestaurantSummary />
      <VendorDetailRestaurantTab />
      <VendorDetailRestaurantList />
      <VendorDetailRestaurantSubmitBtn />
      <VendorDetailRestaurantModal />
      <BottomPageGradient />
    </VendorDetailRestaurantExtraProvider>
  );
}

export default VendorDetailRestaurant;
