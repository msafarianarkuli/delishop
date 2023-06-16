import {createContext, ReactNode, useContext} from "react";
import {IGetSupermarketDetailData} from "types/interfaceSupermarketDetail";
import {useQuery, UseQueryResult} from "react-query";
import {useRouter} from "next/router";
import getSupermarketDetail, {QUERY_KEY_SUPERMARKET_DETAIL} from "api/getSupermarketDetail";

// @ts-ignore
const initialState: UseQueryResult<IGetSupermarketDetailData, {status: number}> = {};

const VendorInfoSupermarketDataContext =
  createContext<UseQueryResult<IGetSupermarketDetailData, {status: number}>>(initialState);

const staleTime = 10 * 60 * 1000;

function VendorInfoSupermarketDataProvider({children}: {children: ReactNode}) {
  const router = useRouter();

  const result = useQuery<IGetSupermarketDetailData, {status: number}>(
    [QUERY_KEY_SUPERMARKET_DETAIL, router.query.id],
    () => getSupermarketDetail({id: router.query.id as string}),
    {staleTime, enabled: router.isReady}
  );

  return (
    <VendorInfoSupermarketDataContext.Provider value={result}>{children}</VendorInfoSupermarketDataContext.Provider>
  );
}

export default VendorInfoSupermarketDataProvider;

export function useVendorInfoSupermarketData() {
  return useContext(VendorInfoSupermarketDataContext);
}
