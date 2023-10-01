import React, {createContext, ReactNode, useContext} from "react";
import {IGetVendorDetailData} from "types/interfaceVendorDetail";
import {useQuery, UseQueryResult} from "react-query";
import {useRouter} from "next/router";
import getVendorDetail from "api/getVendorDetail";

// @ts-ignore
const initialState: UseQueryResult<IGetVendorDetailData, {status: number}> = {};

const VendorDetailStateGoodsDataContext =
  createContext<UseQueryResult<IGetVendorDetailData, {status: number}>>(initialState);
export const QUERY_KEY_HOME_STATE_GOODS = "homeStateGoods";

const staleTime = 10 * 60 * 1000;

function VendorDetailStateGoodsDataProvider({children}: {children: ReactNode}) {
  const router = useRouter();

  const result = useQuery<IGetVendorDetailData, {status: number}>(
    [QUERY_KEY_HOME_STATE_GOODS, 37],
    () => getVendorDetail({id: "37"}),
    {staleTime, enabled: router.isReady}
  );

  return (
    <VendorDetailStateGoodsDataContext.Provider value={result}>{children}</VendorDetailStateGoodsDataContext.Provider>
  );
}

export default VendorDetailStateGoodsDataProvider;

export function useVendorDetailStateGoodsData() {
  return useContext(VendorDetailStateGoodsDataContext);
}
