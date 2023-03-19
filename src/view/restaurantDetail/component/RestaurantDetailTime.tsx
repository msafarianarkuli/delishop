import React, {useMemo} from "react";
import {IconClockSolid} from "assets/icons";
import RestaurantDetailSummaryItem from "view/restaurantDetail/component/RestaurantDetailSummaryItem";

function RestaurantDetailTime({maxSendTime}: {maxSendTime: string}) {
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
    <RestaurantDetailSummaryItem
      top={`${timeDelivery} دقیقه`}
      bottom={
        <>
          <IconClockSolid className="w-4 h-4" />
          <span className="mr-1">زمان تحویل</span>
        </>
      }
    />
  );
}

export default RestaurantDetailTime;
