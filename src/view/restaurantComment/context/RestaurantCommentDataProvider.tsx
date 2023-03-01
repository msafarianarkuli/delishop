import React, {createContext, useContext, useMemo} from "react";
import {IDataContextProvider} from "types/interfaces";
import getVendorComments, {IGetVendorCommentsRes} from "api/getVendorComments";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import {createKeyForUseQuery, createPaginationParams} from "utils/utils";

const initialState: IDataContextProvider<IGetVendorCommentsRes> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const RestaurantCommentDataContext = createContext<IDataContextProvider<IGetVendorCommentsRes>>(initialState);

export const QUERY_KEY_RESTAURANT_COMMENTS = "restaurantComments";
const staleTime = 10 * 60 * 1000;

function RestaurantCommentDataProvider({children}: {children: JSX.Element}) {
  const router = useRouter();

  const params = useMemo(() => {
    let tmpParams: {[x: string]: any} = {};
    if (router.isReady) {
      const tmpQuery = router.query;
      delete tmpQuery.id;
      tmpParams = createPaginationParams(router.query);
    }
    return tmpParams;
  }, [router.isReady, router.query]);

  const keys = useMemo(() => {
    let tmpKeys: (string | number)[] = [QUERY_KEY_RESTAURANT_COMMENTS];
    tmpKeys = createKeyForUseQuery(tmpKeys, router.query.id);
    const page = router.query?.page || "1";
    tmpKeys = createKeyForUseQuery(tmpKeys, page);
    return tmpKeys;
  }, [router.query.id, router.query?.page]);

  const result = useQuery<IGetVendorCommentsRes, {status: number}>(
    keys,
    () => getVendorComments({id: router.query.id as string, params}),
    {staleTime, enabled: router.isReady}
  );

  return <RestaurantCommentDataContext.Provider value={result}>{children}</RestaurantCommentDataContext.Provider>;
}

export default RestaurantCommentDataProvider;

export function useRestaurantCommentData() {
  return useContext(RestaurantCommentDataContext);
}
