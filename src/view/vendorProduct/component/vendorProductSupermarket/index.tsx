import VendorProductSupermarketHeader from "view/vendorProduct/component/vendorProductSupermarket/VendorProductSupermarketHeader";
import VendorProductSupermarketSwiper from "view/vendorProduct/component/vendorProductSupermarket/VendorProductSupermarketSwiper";
import VendorProductSupermarketBreadCrumb from "view/vendorProduct/component/vendorProductSupermarket/VendorProductSupermarketBreadCrumb";
import VendorProductSupermarketTitle from "view/vendorProduct/component/vendorProductSupermarket/VendorProductSupermarketTitle";
import VendorProductSupermarketTags from "view/vendorProduct/component/vendorProductSupermarket/VendorProductSupermarketTags";
import VendorProductSupermarketPrice from "view/vendorProduct/component/vendorProductSupermarket/VendorProductSupermarketPrice";

function VendorProductSupermarket() {
  return (
    <>
      <VendorProductSupermarketHeader />
      <div className="mt-headerNormal">
        <VendorProductSupermarketSwiper />
        <div className="px-screenSpace">
          <VendorProductSupermarketBreadCrumb />
          <VendorProductSupermarketTitle />
          <VendorProductSupermarketTags />
          <VendorProductSupermarketPrice price={45500} count={3} />
        </div>
      </div>
    </>
  );
}

export default VendorProductSupermarket;
