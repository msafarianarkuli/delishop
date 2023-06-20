import VendorProductRestaurantHeader from "view/vendorProduct/component/vendorProductRestaurant/VendorProductRestaurantHeader";
import VendorProductRestaurantSwiper from "view/vendorProduct/component/vendorProductRestaurant/VendorProductRestaurantSwiper";
import VendorProductRestaurantTitle from "view/vendorProduct/component/vendorProductRestaurant/VendorProductRestaurantTitle";
import VendorProductRestaurantDescription from "view/vendorProduct/component/vendorProductRestaurant/VendorProductRestaurantDescription";
import VendorProductRestaurantPrice from "view/vendorProduct/component/vendorProductRestaurant/VendorProductRestaurantPrice";
import VendorProductRestaurantExtra from "view/vendorProduct/component/vendorProductRestaurant/VendorProductRestaurantExtra";
import VendorProductRestaurantComment from "view/vendorProduct/component/vendorProductRestaurant/VendorProductRestaurantComment";

function VendorProductRestaurant() {
  return (
    <>
      <VendorProductRestaurantHeader />
      <div className="mt-headerNormal">
        <VendorProductRestaurantSwiper />
        <VendorProductRestaurantTitle />
        <VendorProductRestaurantDescription />
        <VendorProductRestaurantPrice />
        <VendorProductRestaurantExtra />
        <VendorProductRestaurantComment />
      </div>
    </>
  );
}

export default VendorProductRestaurant;
