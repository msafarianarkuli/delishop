import {createContext, useContext} from "react";
import {IGetVendorsRes} from "api/getVendors";
import {IDataContextProvider} from "types/interfaces";
import useVendorListResult from "hooks/useVendorListResult";

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

function RestaurantDataProvider({children}: IRestaurantDataProvider) {
  const result = useVendorListResult({
    categoryId: 1,
    queryKey: QUERY_KEY_RESTAURANT,
    filterQuery: [restaurantSortQuery, restaurantTagQuery],
    staleTime,
  });

  return <RestaurantDataContext.Provider value={result}>{children}</RestaurantDataContext.Provider>;
}

export default RestaurantDataProvider;

export function useRestaurantData() {
  return useContext(RestaurantDataContext);
}
