import Link from "next/link";
import {IconMoreInfo} from "assets/icons";
import {useVendorDetailParams} from "view/vendorDetail/context/VendorDetailParamsProvider";
import VendorDetailRestaurantSummaryItem from "view/vendorDetail/vendorDetailRestaurant/component/VendorDetailRestaurantSummaryItem";

function VendorDetailRestaurantMoreInfo() {
  const {vendor, id} = useVendorDetailParams();
  return (
    <>
      <Link href={`/${vendor}/info/${id}`}>
        <VendorDetailRestaurantSummaryItem
          top="اطلاعات و نظرات"
          bottom={<IconMoreInfo className="w-4 h-4 text-primary" />}
        />
      </Link>
    </>
  );
}

export default VendorDetailRestaurantMoreInfo;
