import VendorCartDetailHeader from "view/vendorCartDetail/component/VendorCartDetailHeader";
import VendorCartDetailList from "view/vendorCartDetail/component/VendorCartDetailList";
import SubmitBtnToCompleteOrder from "components/submitBtnToCompleteOrder";
import {useVendorCartDetailParams} from "view/vendorCartDetail/context/VendorCartDetailParamsProvider";
import {useVendorCartDetailVendorDetailData} from "view/vendorCartDetail/context/VendorCartDetailVendorDetailDataProvider";
import useVendorNavigation from "hooks/useVendorNavigation";
import {BottomNavigation} from "components";

function VendorCartDetail() {
  const {vendor} = useVendorCartDetailParams();
  const data = useVendorNavigation({vendor});
  const {data: vendorData} = useVendorCartDetailVendorDetailData();

  return (
    <>
      <VendorCartDetailHeader />
      <div className="mt-headerNormal px-screenSpace mb-[165px]">
        <VendorCartDetailList />
        <SubmitBtnToCompleteOrder
          vendorName={vendor}
          open_hours={vendorData?.open_hours}
          open={vendorData?.open}
          className="bottom-bottomNavigation"
        />
      </div>
      <BottomNavigation data={data} />
    </>
  );
}

export default VendorCartDetail;
