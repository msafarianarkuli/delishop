import VendorDetailSupermarketHeader from "view/vendorDetail/vendorDetailSupermarket/component/VendorDetailSupermarketHeader";
import VendorDetailSupermarketSummary from "view/vendorDetail/vendorDetailSupermarket/component/VendorDetailSupermarketSummary";
import VendorDetailSupermarketList from "view/vendorDetail/vendorDetailSupermarket/component/VendorDetailSupermarketList";
import {BottomNavigation, BottomPageGradient} from "components";
import useVendorNavigation from "hooks/useVendorNavigation";
import {useVendorDetailParams} from "view/vendorDetail/context/VendorDetailParamsProvider";
import {useVendorDetailSupermarketData} from "view/vendorDetail/vendorDetailSupermarket/context/VendorDetailSupermarketDataProvider";

function VendorDetailSupermarket() {
  const {error} = useVendorDetailSupermarketData();
  const {vendor} = useVendorDetailParams();
  const data = useVendorNavigation({vendor});

  if (error?.status === 404) {
    return <div>موردی یافت نشد</div>;
  }

  return (
    <>
      <VendorDetailSupermarketHeader />
      <div className="mt-headerNormal px-screenSpace">
        <VendorDetailSupermarketSummary />
      </div>
      <VendorDetailSupermarketList />
      <BottomPageGradient />
      <div className="w-full h-bottomNavigation" />
      <BottomNavigation data={data} />
    </>
  );
}

export default VendorDetailSupermarket;
