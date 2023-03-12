import React, {createContext, useMemo} from "react";
import {IDataContextProvider} from "types/interfaces";
import getSupermarketProducts, {IGetSupermarketProductsRes} from "api/getSupermarketProducts";
import {createKeyForUseQuery, createPaginationParams} from "utils/utils";
import {useRouter} from "next/router";
import {useQuery} from "react-query";

interface ISupermarketCategoryDataProvider {
  children: JSX.Element;
}

const initialState: IDataContextProvider<IGetSupermarketProductsRes> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const SupermarketCategoryDataContext = createContext<IDataContextProvider<IGetSupermarketProductsRes>>(initialState);

export const QUERY_KEY_SUPERMARKET_CATEGORY = "supermarketCategory";
const staleTime = 10 * 60 * 1000;

function SupermarketCategoryDataProvider({children}: ISupermarketCategoryDataProvider) {
  const router = useRouter();
  const params = useMemo(() => {
    let tmpParams: {[x: string]: any} = {};
    if (router.isReady) {
      tmpParams = {
        ...tmpParams,
        ...router.query,
      };
      tmpParams = createPaginationParams(tmpParams);
    }
    return tmpParams;
  }, [router.isReady, router.query]);

  const keys = useMemo(() => {
    let tmpKeys: (string | number)[] = [QUERY_KEY_SUPERMARKET_CATEGORY];
    const page = router.query?.page;
    tmpKeys = createKeyForUseQuery(tmpKeys, page);
    return tmpKeys;
  }, [router.query]);

  const result = useQuery(keys, () => getSupermarketProducts({params}), {staleTime, enabled: router.isReady});

  return <SupermarketCategoryDataContext.Provider value={result}>{children}</SupermarketCategoryDataContext.Provider>;
}

export default SupermarketCategoryDataProvider;
