import React, {createContext, useContext} from "react";
import {IDataContextProvider} from "types/interfaces";
import {IGetSupermarketDetailData} from "types/interfaceSupermarketDetail";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import getSupermarketDetail, {QUERY_KEY_SUPERMARKET_DETAIL} from "api/getSupermarketDetail";

interface ISupermarketCategoryListDataProvider {
  children: JSX.Element;
}

const initialState: IDataContextProvider<IGetSupermarketDetailData> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const SupermarketCategoryListContext = createContext<IDataContextProvider<IGetSupermarketDetailData>>(initialState);

const staleTime = 10 * 60 * 1000;

function SupermarketCategoryListDataProvider({children}: ISupermarketCategoryListDataProvider) {
  const router = useRouter();

  const result = useQuery<IGetSupermarketDetailData, {status: number}>(
    [QUERY_KEY_SUPERMARKET_DETAIL, router.query.id],
    () => getSupermarketDetail({id: router.query.id as string}),
    {staleTime, enabled: router.isReady}
  );

  return <SupermarketCategoryListContext.Provider value={result}>{children}</SupermarketCategoryListContext.Provider>;
}

export default SupermarketCategoryListDataProvider;

export function useSupermarketCategoryListData() {
  return useContext(SupermarketCategoryListContext);
}
