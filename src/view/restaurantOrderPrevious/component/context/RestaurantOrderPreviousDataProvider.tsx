import React, {createContext, useContext, useMemo} from "react";
import {IDataContextProvider} from "types/interfaces";
import getOrdersList, {IGetOrdersRes} from "api/getOrdersList";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import {createKeyForUseQuery, createPaginationParams} from "utils/utils";
import {useQuery} from "react-query";

interface IRestaurantOrderPreviousDataProvider {
  children: JSX.Element;
}

const initialState: IDataContextProvider<IGetOrdersRes> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const RestaurantOrderPreviousData = createContext<IDataContextProvider<IGetOrdersRes>>(initialState);

export const QUERY_KEY_ORDERS_PREVIOUS = "ordersPrevious";

const staleTime = 10 * 60 * 1000;

function RestaurantOrderPreviousDataProvider({children}: IRestaurantOrderPreviousDataProvider) {
  const router = useRouter();
  const {status, data} = useSession();

  const params = useMemo(() => {
    let tmpParams: {[x: string]: any} = {};
    if (router.isReady) {
      tmpParams = createPaginationParams(router.query);
    }
    return tmpParams;
  }, [router.isReady, router.query]);

  const keys = useMemo(() => {
    let tmpKeys: (string | number)[] = [QUERY_KEY_ORDERS_PREVIOUS];
    const page = router.query?.page;
    tmpKeys = createKeyForUseQuery(tmpKeys, page);
    return tmpKeys;
  }, [router.query]);

  const useQueryEnabled = useMemo(() => router.isReady && status === "authenticated", [router.isReady, status]);

  const result = useQuery(keys, () => getOrdersList({params, token: data?.user.token || ""}), {
    staleTime,
    enabled: useQueryEnabled,
  });

  return <RestaurantOrderPreviousData.Provider value={result}>{children}</RestaurantOrderPreviousData.Provider>;
}

export default RestaurantOrderPreviousDataProvider;

export function useRestaurantOrderPreviousData() {
  return useContext(RestaurantOrderPreviousData);
}
