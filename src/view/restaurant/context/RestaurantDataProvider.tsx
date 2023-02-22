import {createContext, useContext, useMemo} from "react";
import {useQuery} from "react-query";
import {getRestaurants} from "api";
import {createPaginationParams} from "utils/utils";
import {IGetRestaurantsRes} from "api/getRestaurants";
import {useRouter} from "next/router";

interface IRestaurantData {
  data?: IGetRestaurantsRes;
  isLoading: boolean;
  isFetching: boolean;
  error: any;
}

interface IRestaurantDataProvider {
  children: JSX.Element;
  initialData?: IGetRestaurantsRes;
}

const initialState: IRestaurantData = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const RestaurantDataContext = createContext<IRestaurantData>(initialState);

export const QUERY_KEY_RESTAURANT = "restaurant";

const staleTime = 10 * 60 * 1000;

function RestaurantDataProvider(props: IRestaurantDataProvider) {
  const {children} = props;
  const router = useRouter();
  const params = useMemo(() => {
    let tmpParams = {};
    if (router.isReady) {
      tmpParams = createPaginationParams(router.query);
    }
    return tmpParams;
  }, [router.isReady, router.query]);
  const result = useQuery(QUERY_KEY_RESTAURANT, () => getRestaurants({params}), {staleTime});

  return <RestaurantDataContext.Provider value={result}>{children}</RestaurantDataContext.Provider>;
}

export default RestaurantDataProvider;

export function useRestaurantData() {
  return useContext(RestaurantDataContext);
}
