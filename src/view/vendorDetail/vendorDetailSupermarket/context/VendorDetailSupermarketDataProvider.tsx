import {createContext, ReactNode, useContext} from "react";
import {IGetSupermarketDetailData} from "types/interfaceSupermarketDetail";
import {useQuery, UseQueryResult} from "react-query";
import {useRouter} from "next/router";
import getSupermarketDetail from "api/getSupermarketDetail";
import {ReactQueryKey} from "utils/Const";

// @ts-ignore
const initialState: UseQueryResult<IGetSupermarketDetailData, {status: number}> = {};

const VendorDetailSupermarketDataContext =
  createContext<UseQueryResult<IGetSupermarketDetailData, {status: number}>>(initialState);

const staleTime = 10 * 60 * 1000;

function VendorDetailSupermarketDataProvider({children}: {children: ReactNode}) {
  const router = useRouter();

  const result = useQuery<IGetSupermarketDetailData, {status: number}>(
    [ReactQueryKey.VENDOR_DETAIL_SUPERMARKET, router.query.id],
    () => getSupermarketDetail({id: router.query.id as string}),
    {staleTime, enabled: router.isReady}
  );

  return (
    <VendorDetailSupermarketDataContext.Provider value={result}>{children}</VendorDetailSupermarketDataContext.Provider>
  );
}

export default VendorDetailSupermarketDataProvider;

export function useVendorDetailSupermarketData() {
  return useContext(VendorDetailSupermarketDataContext);
}
