import React, {createContext, useContext, useMemo} from "react";
import {IDataContextProvider} from "types/interfaces";
import {IGetVendorsRes} from "api/getVendors";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";
import {createKeyForUseQuery, createPaginationParams} from "utils/utils";
import {useQuery} from "react-query";
import {getVendors} from "api";

interface ISuperMarketDataProvider {
  children: JSX.Element;
}

const initialState: IDataContextProvider<IGetVendorsRes> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const SuperMarketDataContext = createContext<IDataContextProvider<IGetVendorsRes>>(initialState);

export const QUERY_KEY_SUPERMARKET = "supermarket";

export const supermarketSortQuery = "sort";

const staleTime = 10 * 60 * 1000;

function SuperMarketDataProvider({children}: ISuperMarketDataProvider) {
  const router = useRouter();
  const {isStorageLoaded, location, userAddress, isUserAddressStorageLoaded} = useSelector(selectAddressMap);

  const params = useMemo(() => {
    let tmpParams: {[x: string]: any} = {
      "category[]": 2,
    };
    if (router.isReady) {
      tmpParams = {
        ...tmpParams,
        ...router.query,
      };
      tmpParams = createPaginationParams(tmpParams);
      if (isUserAddressStorageLoaded && isStorageLoaded) {
        if (userAddress?.latitude && userAddress.longitude) {
          tmpParams.lat = userAddress.latitude;
          tmpParams.log = userAddress.longitude;
        } else if (location?.lat && location?.lng) {
          tmpParams.lat = location.lat;
          tmpParams.log = location.lng;
        }
      }
      if (router.query.hasOwnProperty(supermarketSortQuery)) {
        tmpParams[supermarketSortQuery] = router.query[supermarketSortQuery];
      }
    }
    return tmpParams;
  }, [
    isStorageLoaded,
    isUserAddressStorageLoaded,
    location?.lat,
    location?.lng,
    router.isReady,
    router.query,
    userAddress?.latitude,
    userAddress?.longitude,
  ]);

  const keys = useMemo(() => {
    let tmpKeys: (string | number)[] = [QUERY_KEY_SUPERMARKET];
    const page = router.query?.page;
    tmpKeys = createKeyForUseQuery(tmpKeys, page);
    if (router.query.hasOwnProperty(supermarketSortQuery)) {
      const sort = router.query[supermarketSortQuery];
      tmpKeys = createKeyForUseQuery(tmpKeys, sort);
    }
    return tmpKeys;
  }, [router.query]);

  const useQueryEnabled = useMemo(
    () => isStorageLoaded && isUserAddressStorageLoaded && router.isReady,
    [isStorageLoaded, isUserAddressStorageLoaded, router.isReady]
  );
  const result = useQuery(keys, () => getVendors({params}), {staleTime, enabled: useQueryEnabled});

  return <SuperMarketDataContext.Provider value={result}>{children}</SuperMarketDataContext.Provider>;
}

export default SuperMarketDataProvider;

export function useSupermarketData() {
  return useContext(SuperMarketDataContext);
}
