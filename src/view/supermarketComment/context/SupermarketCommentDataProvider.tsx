import React, {createContext, useContext, useMemo} from "react";
import {IDataContextProvider} from "types/interfaces";
import getVendorComments, {IGetVendorCommentsRes, QUERY_KEY_VENDORS_COMMENTS} from "api/getVendorComments";
import {useRouter} from "next/router";
import {createKeyForUseQuery, createPaginationParams} from "utils/utils";
import {useQuery} from "react-query";

const initialState: IDataContextProvider<IGetVendorCommentsRes> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const SupermarketCommentDataContext = createContext<IDataContextProvider<IGetVendorCommentsRes>>(initialState);

const staleTime = 10 * 60 * 1000;

function SupermarketCommentDataProvider({children}: {children: JSX.Element}) {
  const router = useRouter();

  const params = useMemo(() => {
    let tmpParams: {[x: string]: any} = {};
    if (router.isReady) {
      const tmpQuery = {...router.query};
      delete tmpQuery.id;
      tmpParams = createPaginationParams(router.query);
    }
    return tmpParams;
  }, [router.isReady, router.query]);

  const keys = useMemo(() => {
    let tmpKeys: (string | number)[] = [QUERY_KEY_VENDORS_COMMENTS];
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

  return <SupermarketCommentDataContext.Provider value={result}>{children}</SupermarketCommentDataContext.Provider>;
}

export default SupermarketCommentDataProvider;

export function useSupermarketCommentData() {
  return useContext(SupermarketCommentDataContext);
}
