import {createContext, useContext} from "react";
import {IGetVendorsRes} from "api/getVendors";
import useVendorListResult from "hooks/useVendorListResult";
import {UseInfiniteQueryResult} from "react-query";
import {EVendorsId} from "utils/Const";

interface IRestaurantDataProvider {
  children: JSX.Element;
}

// @ts-ignore
const initialState: UseInfiniteQueryResult<IGetVendorsRes> = {};

const RestaurantDataContext = createContext<UseInfiniteQueryResult<IGetVendorsRes>>(initialState);

export const QUERY_KEY_RESTAURANT = "restaurant";

export const restaurantSortQuery = "sort";
export const restaurantTagQuery = "tag[]";

const staleTime = 10 * 60 * 1000;

function RestaurantDataProvider({children}: IRestaurantDataProvider) {
  const result = useVendorListResult({
    categoryId: [EVendorsId.restaurant],
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
