import VendorDetailSupermarketDataProvider from "view/vendorDetail/vendorDetailSupermarket/context/VendorDetailSupermarketDataProvider";
import VendorDetailSupermarketHeader from "view/vendorDetail/vendorDetailSupermarket/component/VendorDetailSupermarketHeader";
import VendorDetailSupermarketSummary from "view/vendorDetail/vendorDetailSupermarket/component/VendorDetailSupermarketSummary";
import VendorDetailSupermarketList from "view/vendorDetail/vendorDetailSupermarket/component/VendorDetailSupermarketList";
import {BottomNavigation, BottomPageGradient} from "components";
import useVendorNavigation from "hooks/useVendorNavigation";
import {useVendorDetailParams} from "view/vendorDetail/context/VendorDetailParamsProvider";

function VendorDetailSupermarket() {
  const {vendor} = useVendorDetailParams();
  const data = useVendorNavigation({vendor});

  return (
    <VendorDetailSupermarketDataProvider>
      <VendorDetailSupermarketHeader />
      <div className="mt-headerNormal px-screenSpace">
        <VendorDetailSupermarketSummary />
      </div>
      <VendorDetailSupermarketList />
      <BottomPageGradient />
      <div className="w-full h-bottomNavigation" />
      <BottomNavigation data={data} />
    </VendorDetailSupermarketDataProvider>
  );
}

export default VendorDetailSupermarket;
