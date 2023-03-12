import React, {createContext, useContext} from "react";
import {IDataContextProvider} from "types/interfaces";
import {IGetVendorDetailData} from "types/interfaceVendorDetail";
import {useQuery} from "react-query";
import {useRouter} from "next/router";
import getVendorDetail from "api/getVendorDetail";

const initialState: IDataContextProvider<IGetVendorDetailData> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const RestaurantDetailDataContext = createContext<IDataContextProvider<IGetVendorDetailData>>(initialState);

export const QUERY_KEY_RESTAURANT_DETAIL = "restaurantDetail";
const staleTime = 10 * 60 * 1000;

function RestaurantDetailDataProvider({children}: {children: JSX.Element}) {
  const router = useRouter();

  const result = useQuery<IGetVendorDetailData, {status: number}>(
    [QUERY_KEY_RESTAURANT_DETAIL, router.query.id],
    () => getVendorDetail({id: router.query.id as string}),
    {staleTime, enabled: router.isReady}
  );

  return <RestaurantDetailDataContext.Provider value={result}>{children}</RestaurantDetailDataContext.Provider>;
}

export default RestaurantDetailDataProvider;

export function useRestaurantDetailData() {
  return useContext(RestaurantDetailDataContext);
}
