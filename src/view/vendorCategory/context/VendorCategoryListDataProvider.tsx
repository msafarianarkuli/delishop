import {IGetSupermarketDetailData} from "types/interfaceSupermarketDetail";
import React, {createContext, ReactNode, useContext} from "react";
import {useQuery, UseQueryResult} from "react-query";
import {useRouter} from "next/router";
import getSupermarketDetail from "api/getSupermarketDetail";
import {ReactQueryKey} from "utils/Const";

// @ts-ignore
const initialState: UseQueryResult<IGetSupermarketDetailData, {status: number}> = {};

const VendorCategoryListDataContext =
  createContext<UseQueryResult<IGetSupermarketDetailData, {status: number}>>(initialState);

const staleTime = 10 * 60 * 1000;

function VendorCategoryListDataProvider({children}: {children: ReactNode}) {
  const router = useRouter();

  const result = useQuery<IGetSupermarketDetailData, {status: number}>(
    [ReactQueryKey.VENDOR_DETAIL_SUPERMARKET, router.query.id],
    () => getSupermarketDetail({id: router.query.id as string}),
    {staleTime, enabled: router.isReady}
  );

  return <VendorCategoryListDataContext.Provider value={result}>{children}</VendorCategoryListDataContext.Provider>;
}

export default VendorCategoryListDataProvider;

export function useVendorCategoryListData() {
  return useContext(VendorCategoryListDataContext);
}
