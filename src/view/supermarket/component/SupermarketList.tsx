import SuperMarketCard from "view/supermarket/component/supermarketCard";
import Link from "next/link";
import {useSupermarketData} from "view/supermarket/context/SuperMarketDataProvider";
import {IGetVendorsRes} from "api/getVendors";
import React, {useMemo} from "react";
import {getDistanceFromLatLong} from "utils/utils";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";
import {useLogisticPrice} from "context/LogisticPriceProvider";

function SupermarketList() {
  const {data, isLoading} = useSupermarketData();
  return (
    <div className="mt-5">
      {isLoading ? <div>loading ...</div> : null}
      {!isLoading && !data?.vendors?.length ? <div>موردی یافت نشد</div> : null}
      <SupermarketShowList data={data} />
    </div>
  );
}

function SupermarketShowList({data}: {data?: IGetVendorsRes}) {
  const {userAddress, location} = useSelector(selectAddressMap);
  const {data: deliveryBasicPrice} = useLogisticPrice();
  const location1 = useMemo(
    () => ({
      lat: userAddress?.latitude || location?.lat || 0,
      long: userAddress?.longitude || location?.lng || 0,
    }),
    [location?.lat, location?.lng, userAddress?.latitude, userAddress?.longitude]
  );

  return (
    <>
      {data?.vendors.map((item, index) => {
        const location2 = {
          lat: item.lat,
          long: item.long,
        };
        const distance = getDistanceFromLatLong({location1, location2, unit: "kilometers"});
        const price = (deliveryBasicPrice || 0) * distance;
        return (
          <Link key={index} href={`/supermarket/${item.id}`}>
            <SuperMarketCard
              title={item.name}
              deliveryPrice={Math.round(price / 10)}
              coin={item.point}
              rate={item.rate}
              image={item.logo}
            />
          </Link>
        );
      })}
    </>
  );
}

export default SupermarketList;
