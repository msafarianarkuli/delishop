import {useEffect, useMemo} from "react";
import Link from "next/link";
import {useInView} from "react-intersection-observer";
import {useVendorData} from "view/vendor/context/VendorDataProvider";
import VendorRestaurantCard from "view/vendor/component/vendorRestaurantCard";
import {useVendorParams} from "view/vendor/context/VendorParamsProvider";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";
import {useLogisticPrice} from "context/LogisticPriceProvider";
import {getDistanceFromLatLong, roundPrice} from "utils/utils";
import VendorSupermarketCard from "view/vendor/component/vendorSupermraketCard";
import {useLogisticAllPrices} from "context/LogisticAllPricesProvider";
import {IGetLogisticAllPriceRes} from "types/interfaceLogistic";
import {useRouter} from "next/router";
import classNames from "classnames";

function VendorList() {
  const {data, isLoading} = useVendorData();
  const {isRestaurant, isSupermarket} = useVendorParams();
  const router = useRouter();
  const isJustRestaurant = router.query.vendor === "restaurant";

  const containerClassName = classNames({
    "pt-[220px]": isJustRestaurant,
    "pt-[150px]": !isJustRestaurant,
  });

  return (
    <div className={`flex flex-col flex-1 px-screenSpace overflow-auto mt-[-54px] ${containerClassName}`}>
      {isLoading ? <div>loading ...</div> : null}
      {!isLoading && !data?.pages[0]?.vendors.length ? <div>موردی یافت نشد</div> : null}
      {isRestaurant ? <VendorListShowRestaurant /> : null}
      {isSupermarket ? <VendorListShowSupermarket /> : null}
    </div>
  );
}

export default VendorList;

function VendorListShowRestaurant() {
  const {data, fetchNextPage} = useVendorData();
  const {ref, inView} = useInView();
  const {vendor} = useVendorParams();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <>
      {data?.pages?.map((value, index, array) => {
        return value.vendors.map((item, idx, arr) => {
          const condition = array.length - 1 === index && arr.length - 1 === idx;
          const tmpRef = condition ? ref : null;
          return (
            <Link ref={tmpRef} key={item.id} href={`/${vendor}/${item.id}`} prefetch={false}>
              <VendorRestaurantCard
                image={item.banner}
                title={item.name}
                description={item.about}
                star={+item.rate}
                coin={item.point}
                time={item.max_sendtime}
                open={!!item.open}
                openHours={item.open_hours}
              />
            </Link>
          );
        });
      })}
    </>
  );
}

function VendorListShowSupermarket() {
  const {data, fetchNextPage} = useVendorData();
  const {userAddress, location} = useSelector(selectAddressMap);
  const {ref, inView} = useInView();
  const {data: deliveryBasicPrice} = useLogisticPrice();
  const {vendor} = useVendorParams();
  const logisticPrices = useLogisticAllPrices();
  const lessThanOneKmPrice = logisticPrices?.data?.find(
    (item: IGetLogisticAllPriceRes) => item.name === "lessThanOne"
  ).price;

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const location1 = useMemo(
    () => ({
      lat: userAddress?.latitude || location?.lat || 0,
      long: userAddress?.longitude || location?.lng || 0,
    }),
    [location?.lat, location?.lng, userAddress?.latitude, userAddress?.longitude]
  );

  return (
    <>
      {data?.pages?.map((value, index, array) => {
        return value.vendors.map((item, idx, arr) => {
          const condition = array.length - 1 === index && arr.length - 1 === idx;
          const tmpRef = condition ? ref : null;
          const location2 = {
            lat: item.lat,
            long: item.long,
          };
          const distance = getDistanceFromLatLong({location1, location2, unit: "kilometers"});
          const price = distance < 1 ? lessThanOneKmPrice : (deliveryBasicPrice || 0) * distance;

          return (
            <Link ref={tmpRef} key={idx} href={`/${vendor}/${item.id}`} prefetch={false}>
              <VendorSupermarketCard
                title={item.name}
                deliveryPrice={roundPrice(price / 10)}
                coin={item.point}
                rate={item.rate}
                image={item.banner}
                open={!!item.open}
                openHours={item.open_hours}
              />
            </Link>
          );
        });
      })}
    </>
  );
}
