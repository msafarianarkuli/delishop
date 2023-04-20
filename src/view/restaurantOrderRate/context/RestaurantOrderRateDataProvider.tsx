import React, {createContext, useContext} from "react";
import {useQuery, UseQueryResult} from "react-query";
import {IGetVendorDetailData} from "types/interfaceVendorDetail";
import {useRouter} from "next/router";
import getVendorDetail from "api/getVendorDetail";
import {QUERY_KEY_RESTAURANT_DETAIL} from "view/restaurantDetail/context/RestaurantDetailDataProvider";

// @ts-ignore
const initialState: UseQueryResult<IGetVendorDetailData> = {};

const RestaurantOrderRateDataContext = createContext<UseQueryResult<IGetVendorDetailData>>(initialState);

const staleTime = 10 * 60 * 1000;

function RestaurantOrderRateDataProvider({children}: {children: JSX.Element}) {
  const router = useRouter();

  const result = useQuery<IGetVendorDetailData>(
    [QUERY_KEY_RESTAURANT_DETAIL, router.query.id],
    () => getVendorDetail({id: router.query.id as string}),
    {staleTime, enabled: router.isReady}
  );

  return <RestaurantOrderRateDataContext.Provider value={result}>{children}</RestaurantOrderRateDataContext.Provider>;
}

export default RestaurantOrderRateDataProvider;

export function useRestaurantOrderRateData() {
  return useContext(RestaurantOrderRateDataContext);
}
