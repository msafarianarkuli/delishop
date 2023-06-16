import {createContext, ReactNode, useContext} from "react";
import {IGetSupermarketDetailData} from "types/interfaceSupermarketDetail";
import {useQuery, UseQueryResult} from "react-query";
import {useRouter} from "next/router";
import getSupermarketDetail from "api/getSupermarketDetail";
import {ReactQueryKey} from "utils/Const";

// @ts-ignore
const initialState: UseQueryResult<IGetSupermarketDetailData> = {};

const SupermarketSubcategoryCategoryListContext =
  createContext<UseQueryResult<IGetSupermarketDetailData>>(initialState);

const staleTime = 10 * 60 * 1000;

function VendorSubcategoryCategoryListDataProvider({children}: {children: ReactNode}) {
  const router = useRouter();

  const result = useQuery<IGetSupermarketDetailData, {status: number}>(
    [ReactQueryKey.VENDOR_DETAIL_SUPERMARKET, router.query.id],
    () => getSupermarketDetail({id: router.query.id as string}),
    {staleTime, enabled: router.isReady}
  );

  return (
    <SupermarketSubcategoryCategoryListContext.Provider value={result}>
      {children}
    </SupermarketSubcategoryCategoryListContext.Provider>
  );
}

export default VendorSubcategoryCategoryListDataProvider;

export function useVendorSubcategoryCategoryListData() {
  return useContext(SupermarketSubcategoryCategoryListContext);
}
