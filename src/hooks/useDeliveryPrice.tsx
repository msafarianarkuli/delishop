import {useMemo} from "react";
import {getDistanceFromLatLong, roundPrice} from "utils/utils";
import {useLogisticPrice} from "context/LogisticPriceProvider";
import {IGetLogisticAllPriceRes} from "types/interfaceLogistic";
import {useLogisticAllPrices} from "context/LogisticAllPricesProvider";

interface IUseDeliveryPrice {
  location1: {
    lat: number;
    long: number;
  };
  location2: {
    lat: number;
    long: number;
  };
}

function useDeliveryPrice(props: IUseDeliveryPrice) {
  const {location1, location2} = props;
  const {data} = useLogisticPrice();
  const {data: logisticPrices} = useLogisticAllPrices();

  const lessThanOneKmPrice = logisticPrices?.find((item: IGetLogisticAllPriceRes) => item.name === "lessThanOne").price;

  const distance = useMemo(() => {
    if (location1.lat && location1.long && location2.lat && location2.long) {
      return getDistanceFromLatLong({location1, location2, unit: "kilometers"});
    }
    return 0;
  }, [location1, location2]);

  const deliveryPrice = useMemo(() => {
    if (distance < 1) {
      return lessThanOneKmPrice;
    } else {
      return Math.round((data || 0) * distance);
    }
  }, [data, distance]);

  const deliveryToman = useMemo(() => roundPrice(deliveryPrice / 10), [deliveryPrice]);

  return {deliveryPrice, deliveryToman};
}

export default useDeliveryPrice;
