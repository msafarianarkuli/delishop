import React, {createContext, useContext} from "react";
import {IDataContextProvider} from "types/interfaces";
import {IGetVendorDetailData} from "types/interfaceVendorDetail";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import getVendorDetail from "api/getVendorDetail";

const initialState: IDataContextProvider<IGetVendorDetailData> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const RestaurantInfoDataContext = createContext<IDataContextProvider<IGetVendorDetailData>>(initialState);

// key is same as restaurantDetail
export const QUERY_KEY_RESTAURANT_INFO = "restaurantDetail";
const staleTime = 10 * 60 * 1000;

function RestaurantInfoDataProvider({children}: {children: JSX.Element}) {
  const router = useRouter();
  const result = useQuery<IGetVendorDetailData, {status: number}>(
    [QUERY_KEY_RESTAURANT_INFO, router.query.id],
    () => getVendorDetail({id: router.query.id as string}),
    {staleTime}
  );

  return <RestaurantInfoDataContext.Provider value={result}>{children}</RestaurantInfoDataContext.Provider>;
}

export default RestaurantInfoDataProvider;

export function useRestaurantInfoData() {
  return useContext(RestaurantInfoDataContext);
}
