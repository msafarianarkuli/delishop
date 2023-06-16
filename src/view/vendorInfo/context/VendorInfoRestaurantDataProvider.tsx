import {createContext, ReactNode, useContext} from "react";
import {IGetVendorDetailData} from "types/interfaceVendorDetail";
import {useQuery, UseQueryResult} from "react-query";
import {useRouter} from "next/router";
import getVendorDetail from "api/getVendorDetail";
import {ReactQueryKey} from "utils/Const";

// @ts-ignore
const initialState: UseQueryResult<IGetVendorDetailData, {status: number}> = {};

const VendorInfoRestaurantDataContext =
  createContext<UseQueryResult<IGetVendorDetailData, {status: number}>>(initialState);

const staleTime = 10 * 60 * 1000;

function VendorInfoRestaurantDataProvider({children}: {children: ReactNode}) {
  const router = useRouter();
  const result = useQuery<IGetVendorDetailData, {status: number}>(
    [ReactQueryKey.VENDOR_DETAIL_RESTAURANT, router.query.id],
    () => getVendorDetail({id: router.query.id as string}),
    {staleTime}
  );

  return <VendorInfoRestaurantDataContext.Provider value={result}>{children}</VendorInfoRestaurantDataContext.Provider>;
}

export default VendorInfoRestaurantDataProvider;

export function useVendorInfoRestaurantData() {
  return useContext(VendorInfoRestaurantDataContext);
}
