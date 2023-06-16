import {useMemo} from "react";
import {IconClockSolid} from "assets/icons";
import VendorDetailRestaurantSummaryItem from "view/vendorDetail/vendorDetailRestaurant/component/VendorDetailRestaurantSummaryItem";

function VendorDetailRestaurantTime({maxSendTime}: {maxSendTime: string}) {
  const timeDelivery = useMemo(() => {
    let result = "";
    if (maxSendTime) {
      if (maxSendTime.search("-") !== -1) {
        result = maxSendTime.replace("-", " تا ");
      } else {
        result = "تا " + maxSendTime;
      }
    }
    return result;
  }, [maxSendTime]);

  return (
    <VendorDetailRestaurantSummaryItem
      top={`${timeDelivery} دقیقه`}
      bottom={
        <>
          <IconClockSolid className="w-4 h-4" />
          <span className="mr-1 whitespace-nowrap">زمان تحویل</span>
        </>
      }
    />
  );
}

export default VendorDetailRestaurantTime;
