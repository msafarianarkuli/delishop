import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";
import useDeliveryPrice from "hooks/useDeliveryPrice";
import VendorDetailSupermarketTitle from "view/vendorDetail/vendorDetailSupermarket/component/VendorDetailSupermarketTitle";
import {useVendorDetailSupermarketData} from "view/vendorDetail/vendorDetailSupermarket/context/VendorDetailSupermarketDataProvider";
import {useVendorDetailParams} from "view/vendorDetail/context/VendorDetailParamsProvider";

function VendorDetailSupermarketSummary() {
  const {data} = useVendorDetailSupermarketData();
  const {userAddress, location} = useSelector(selectAddressMap);
  const {vendor, id} = useVendorDetailParams();

  const {deliveryToman} = useDeliveryPrice({
    location1: {
      lat: userAddress?.latitude || location?.lat || 0,
      long: userAddress?.longitude || location?.lng || 0,
    },
    location2: {
      lat: data?.vendor.lat || 0,
      long: data?.vendor.long || 0,
    },
  });

  return (
    <>
      <VendorDetailSupermarketTitle
        title={data?.vendor.name || ""}
        coin={data?.vendor.point || 0}
        image={data?.vendor?.logo}
        rate={data?.vendor?.rate || ""}
        deliveryPrice={deliveryToman}
        // href={`/supermarket/info/${data?.vendor.id}`}
        href={`/${vendor}/info/${id}`}
      />
    </>
  );
}

export default VendorDetailSupermarketSummary;
