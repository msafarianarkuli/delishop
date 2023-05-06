import {useEffect, useMemo} from "react";
import SuperMarketCard from "view/supermarket/component/supermarketCard";
import Link from "next/link";
import {useSupermarketData} from "view/supermarket/context/SuperMarketDataProvider";
import {getDistanceFromLatLong} from "utils/utils";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";
import {useLogisticPrice} from "context/LogisticPriceProvider";
import {useInView} from "react-intersection-observer";

function SupermarketList() {
  const {data, isLoading} = useSupermarketData();
  return (
    <div className="mt-5">
      {isLoading ? <div>loading ...</div> : null}
      {!isLoading && !data?.pages[0]?.vendors.length ? <div>موردی یافت نشد</div> : null}
      <SupermarketShowList />
    </div>
  );
}

function SupermarketShowList() {
  const {data, fetchNextPage} = useSupermarketData();
  const {userAddress, location} = useSelector(selectAddressMap);
  const {ref, inView} = useInView();
  const {data: deliveryBasicPrice} = useLogisticPrice();

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
          const price = (deliveryBasicPrice || 0) * distance;
          return (
            <Link ref={tmpRef} key={idx} href={`/supermarket/${item.id}`} prefetch={false}>
              <SuperMarketCard
                title={item.name}
                deliveryPrice={Math.round(price / 10)}
                coin={item.point}
                rate={item.rate}
                image={item.banner}
              />
            </Link>
          );
        });
      })}
    </>
  );
}

export default SupermarketList;
