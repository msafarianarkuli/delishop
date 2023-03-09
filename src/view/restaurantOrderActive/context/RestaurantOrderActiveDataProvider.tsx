import React, {createContext, useContext, useMemo} from "react";
import {IDataContextProvider} from "types/interfaces";
import {IGetOrdersRes} from "api/getOrdersList";
import {createKeyForUseQuery, createPaginationParams} from "utils/utils";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import {useQuery} from "react-query";
import {getOrdersList} from "api";

interface IRestaurantOrderActiveDataProvider {
  children: JSX.Element;
}

const initialState: IDataContextProvider<IGetOrdersRes> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const RestaurantOrderActiveData = createContext<IDataContextProvider<IGetOrdersRes>>(initialState);

export const QUERY_KEY_ORDERS_ACTIVE = "ordersActive";

const staleTime = 10 * 60 * 1000;

function RestaurantOrderActiveDataProvider({children}: IRestaurantOrderActiveDataProvider) {
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
    let tmpKeys: (string | number)[] = [QUERY_KEY_ORDERS_ACTIVE];
    const page = router.query?.page;
    tmpKeys = createKeyForUseQuery(tmpKeys, page);
    return tmpKeys;
  }, [router.query]);

  const useQueryEnabled = useMemo(() => router.isReady && status === "authenticated", [router.isReady, status]);

  const result = useQuery(keys, () => getOrdersList({params, token: data?.user.token || ""}), {
    staleTime,
    enabled: useQueryEnabled,
  });

  return <RestaurantOrderActiveData.Provider value={result}>{children}</RestaurantOrderActiveData.Provider>;
}

export default RestaurantOrderActiveDataProvider;

export function useRestaurantOrderActiveData() {
  return useContext(RestaurantOrderActiveData);
}
