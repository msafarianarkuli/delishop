import React, {useMemo} from "react";
import IconDelivery from "assets/icons/IconDelivery";
import RestaurantDetailSummaryItem from "view/restaurantDetail/component/RestaurantDetailSummaryItem";
import {getDistanceFromLatLong} from "utils/utils";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";

interface IRestaurantDetailDelivery {
  lat: number;
  long: number;
}

function RestaurantDetailDelivery(props: IRestaurantDetailDelivery) {
  const {lat, long} = props;
  const {userAddress, location, isStorageLoaded, isUserAddressStorageLoaded} = useSelector(selectAddressMap);
  const deliveryPrice = 1000;

  const distance = useMemo(() => {
    if (isStorageLoaded && isUserAddressStorageLoaded) {
      const finalLat = userAddress?.latitude || location?.lat || 0;
      const finalLong = userAddress?.longitude || location?.lng || 0;
      return getDistanceFromLatLong({
        location1: {lat, long},
        location2: {
          lat: finalLat,
          long: finalLong,
        },
        unit: "kilometers",
      });
    }
    return 0;
  }, [
    isStorageLoaded,
    isUserAddressStorageLoaded,
    lat,
    location?.lat,
    location?.lng,
    long,
    userAddress?.latitude,
    userAddress?.longitude,
  ]);

  return (
    <RestaurantDetailSummaryItem
      classNameContainer="px-5 mx-5 after:content-[' '] after:absolute after:bg-textColor after:left-0 after:h-[25px] after:w-[1px] before:content-[' '] before:absolute before:bg-textColor before:right-0 before:h-[25px] before:w-[1px]"
      top={
        <>
          <span>{Math.round(deliveryPrice * distance).toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </>
      }
      bottom={
        <>
          <IconDelivery className="w-4 h-4" />
          <span className="mr-1">ارسال رستوران</span>
        </>
      }
    />
  );
}

export default RestaurantDetailDelivery;
