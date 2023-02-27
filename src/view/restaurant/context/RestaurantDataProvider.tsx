import {createContext, useContext, useMemo} from "react";
import {useQuery} from "react-query";
import {getRestaurants} from "api";
import {createKeyForUseQuery, createPaginationParams} from "utils/utils";
import {IGetRestaurantsRes} from "api/getRestaurants";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";
import {IDataContextProvider} from "types/interfaces";

interface IRestaurantDataProvider {
  children: JSX.Element;
  initialData?: IGetRestaurantsRes;
}

const initialState: IDataContextProvider<IGetRestaurantsRes> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const RestaurantDataContext = createContext<IDataContextProvider<IGetRestaurantsRes>>(initialState);

export const QUERY_KEY_RESTAURANT = "restaurant";

const staleTime = 10 * 60 * 1000;

function RestaurantDataProvider(props: IRestaurantDataProvider) {
  const {children} = props;
  const router = useRouter();
  const {isStorageLoaded, location} = useSelector(selectAddressMap);

  const params = useMemo(() => {
    let tmpParams: {[x: string]: any} = {};
    if (router.isReady) {
      tmpParams = createPaginationParams(router.query);
      if (location?.lat && location.lng && isStorageLoaded) {
        tmpParams.lat = location.lat;
        tmpParams.log = location.lng;
      }
      if (router.query?.sort) {
        tmpParams.sort = router.query.sort;
      }
    }
    return tmpParams;
  }, [isStorageLoaded, location?.lat, location?.lng, router.isReady, router.query]);

  const keys = useMemo(() => {
    let tmpKeys: (string | number)[] = [QUERY_KEY_RESTAURANT];
    const sort = router.query?.sort;
    const page = router.query?.page;
    tmpKeys = createKeyForUseQuery(tmpKeys, sort);
    tmpKeys = createKeyForUseQuery(tmpKeys, page);
    return tmpKeys;
  }, [router.query?.page, router.query?.sort]);

  const useQueryEnabled = useMemo(() => isStorageLoaded && router.isReady, [isStorageLoaded, router.isReady]);

  const result = useQuery(keys, () => getRestaurants({params}), {staleTime, enabled: useQueryEnabled});

  return <RestaurantDataContext.Provider value={result}>{children}</RestaurantDataContext.Provider>;
}

export default RestaurantDataProvider;

export function useRestaurantData() {
  return useContext(RestaurantDataContext);
}
