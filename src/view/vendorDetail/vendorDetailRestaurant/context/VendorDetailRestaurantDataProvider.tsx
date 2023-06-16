import React, {createContext, ReactNode, useContext} from "react";
import {IGetVendorDetailData} from "types/interfaceVendorDetail";
import {useQuery, UseQueryResult} from "react-query";
import {useRouter} from "next/router";
import getVendorDetail from "api/getVendorDetail";
import {ReactQueryKey} from "utils/Const";

// @ts-ignore
const initialState: UseQueryResult<IGetVendorDetailData, {status: number}> = {};

const VendorDetailRestaurantDataContext =
  createContext<UseQueryResult<IGetVendorDetailData, {status: number}>>(initialState);

const staleTime = 10 * 60 * 1000;

function VendorDetailRestaurantDataProvider({children}: {children: ReactNode}) {
  const router = useRouter();

  const result = useQuery<IGetVendorDetailData, {status: number}>(
    [ReactQueryKey.VENDOR_DETAIL_RESTAURANT, router.query.id],
    () => getVendorDetail({id: router.query.id as string}),
    {staleTime, enabled: router.isReady}
  );

  return (
    <VendorDetailRestaurantDataContext.Provider value={result}>{children}</VendorDetailRestaurantDataContext.Provider>
  );
}

export default VendorDetailRestaurantDataProvider;

export function useVendorDetailRestaurantData() {
  return useContext(VendorDetailRestaurantDataContext);
}
