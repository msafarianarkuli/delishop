import React, {createContext, ReactNode, useContext, useMemo} from "react";
import getVendorComments, {IGetVendorCommentsRes} from "api/getVendorComments";
import {useQuery, UseQueryResult} from "react-query";
import {useRouter} from "next/router";
import {createKeyForUseQuery, createPaginationParams} from "utils/utils";
import {ReactQueryKey} from "utils/Const";

// @ts-ignore
const initialState: UseQueryResult<IGetVendorCommentsRes> = {};

const VendorCommentDataContext = createContext<UseQueryResult<IGetVendorCommentsRes>>(initialState);

const staleTime = 10 * 60 * 1000;

function VendorCommentDataProvider({children}: {children: ReactNode}) {
  const router = useRouter();

  const params = useMemo(() => {
    let tmpParams: {[x: string]: any} = {};
    if (router.isReady) {
      const tmpQuery = {...router.query};
      delete tmpQuery?.vendor;
      delete tmpQuery?.id;
      tmpParams = createPaginationParams(tmpQuery);
    }
    console.log("tmpParams", tmpParams);
    return tmpParams;
  }, [router.isReady, router.query]);

  const keys = useMemo(() => {
    let tmpKeys: (string | number)[] = [ReactQueryKey.VENDOR_COMMENT];
    tmpKeys = createKeyForUseQuery(tmpKeys, router.query.id);
    return tmpKeys;
  }, [router.query.id]);

  const result = useQuery<IGetVendorCommentsRes, {status: number}>(
    keys,
    () => getVendorComments({id: router.query.id as string, params}),
    {staleTime, enabled: router.isReady}
  );

  return <VendorCommentDataContext.Provider value={result}>{children}</VendorCommentDataContext.Provider>;
}

export default VendorCommentDataProvider;

export function useVendorCommentData() {
  return useContext(VendorCommentDataContext);
}
