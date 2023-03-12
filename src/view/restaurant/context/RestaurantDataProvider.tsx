import {createContext, useContext, useMemo} from "react";
import {useQuery} from "react-query";
import {createKeyForUseQuery, createPaginationParams} from "utils/utils";
import getVendors, {IGetVendorsRes} from "api/getVendors";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";
import {IDataContextProvider} from "types/interfaces";

interface IRestaurantDataProvider {
  children: JSX.Element;
}

const initialState: IDataContextProvider<IGetVendorsRes> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const RestaurantDataContext = createContext<IDataContextProvider<IGetVendorsRes>>(initialState);

export const QUERY_KEY_RESTAURANT = "restaurant";

export const restaurantSortQuery = "sort";
export const restaurantTagQuery = "tag[]";

const staleTime = 10 * 60 * 1000;

function RestaurantDataProvider(props: IRestaurantDataProvider) {
  const {children} = props;
  const router = useRouter();
  const {isStorageLoaded, location, userAddress, isUserAddressStorageLoaded} = useSelector(selectAddressMap);

  const params = useMemo(() => {
    let tmpParams: {[x: string]: any} = {
      "category[]": 1,
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
      if (router.query.hasOwnProperty(restaurantSortQuery)) {
        tmpParams[restaurantSortQuery] = router.query[restaurantSortQuery];
      }
      if (router.query.hasOwnProperty(restaurantTagQuery)) {
        tmpParams[restaurantTagQuery] = router.query[restaurantTagQuery];
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
    let tmpKeys: (string | number)[] = [QUERY_KEY_RESTAURANT];
    const page = router.query?.page;
    tmpKeys = createKeyForUseQuery(tmpKeys, page);
    if (router.query.hasOwnProperty(restaurantSortQuery)) {
      const sort = router.query[restaurantSortQuery];
      tmpKeys = createKeyForUseQuery(tmpKeys, sort);
    }
    if (router.query.hasOwnProperty(restaurantTagQuery)) {
      const tag = router.query[restaurantTagQuery];
      tmpKeys = createKeyForUseQuery(tmpKeys, tag);
    }
    return tmpKeys;
  }, [router.query]);

  const useQueryEnabled = useMemo(
    () => isStorageLoaded && isUserAddressStorageLoaded && router.isReady,
    [isStorageLoaded, isUserAddressStorageLoaded, router.isReady]
  );

  const result = useQuery(keys, () => getVendors({params}), {staleTime, enabled: useQueryEnabled});

  return <RestaurantDataContext.Provider value={result}>{children}</RestaurantDataContext.Provider>;
}

export default RestaurantDataProvider;

export function useRestaurantData() {
  return useContext(RestaurantDataContext);
}
