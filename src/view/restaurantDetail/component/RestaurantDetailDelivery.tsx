import React from "react";
import IconDelivery from "assets/icons/IconDelivery";
import RestaurantDetailSummaryItem from "view/restaurantDetail/component/RestaurantDetailSummaryItem";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";
import useDeliveryPrice from "hooks/useDeliveryPrice";

interface IRestaurantDetailDelivery {
  lat: number;
  long: number;
}

function RestaurantDetailDelivery(props: IRestaurantDetailDelivery) {
  const {lat, long} = props;
  const {userAddress, location} = useSelector(selectAddressMap);
  const {deliveryToman} = useDeliveryPrice({
    location1: {
      lat: userAddress?.latitude || location?.lat || 0,
      long: userAddress?.longitude || location?.lng || 0,
    },
    location2: {
      lat,
      long,
    },
  });

  return (
    <RestaurantDetailSummaryItem
      classNameContainer="px-5 mx-5 mobile:px-7 mobile:mx-7 after:content-[' '] after:absolute after:bg-textColor after:left-0 after:h-[25px] after:w-[1px] before:content-[' '] before:absolute before:bg-textColor before:right-0 before:h-[25px] before:w-[1px]"
      top={
        <>
          <span>{deliveryToman.toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </>
      }
      bottom={
        <>
          <IconDelivery className="w-4 h-4" />
          <span className="mr-1 whitespace-nowrap">ارسال رستوران</span>
        </>
      }
    />
  );
}

export default RestaurantDetailDelivery;
