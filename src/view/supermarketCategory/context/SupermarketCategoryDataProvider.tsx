import React, {createContext, useContext, useMemo} from "react";
import {IDataContextProvider} from "types/interfaces";
import getSupermarketProducts from "api/getSupermarketProducts";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import {TSupermarketProductsListDataGroups} from "types/interfaceSupermarketProductsList";
import {createKeyForUseQuery} from "utils/utils";

interface ISupermarketCategoryDataProvider {
  children: JSX.Element;
}

const initialState: IDataContextProvider<TSupermarketProductsListDataGroups> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const SupermarketCategoryDataContext =
  createContext<IDataContextProvider<TSupermarketProductsListDataGroups>>(initialState);

export const QUERY_KEY_SUPERMARKET_PRODUCTS_LIST = "supermarketCategoryProductsList";
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
    }
    return tmpParams;
  }, [router.isReady, router.query]);

  const vendorId = useMemo(() => {
    const id = router.query.id;
    if (id && !Array.isArray(id)) {
      return id;
    }
    return "";
  }, [router.query.id]);

  const categoryId = useMemo(() => {
    const id = router.query.category;
    if (id && !Array.isArray(id)) {
      return id;
    }
    return "";
  }, [router.query.category]);

  const keys = useMemo(() => {
    let tmpKeys: (string | number)[] = [QUERY_KEY_SUPERMARKET_PRODUCTS_LIST];
    tmpKeys = createKeyForUseQuery(tmpKeys, vendorId);
    tmpKeys = createKeyForUseQuery(tmpKeys, categoryId);
    return tmpKeys;
  }, [categoryId, vendorId]);

  const result = useQuery(keys, () => getSupermarketProducts({params, categoryId, vendorId}), {
    staleTime,
    enabled: router.isReady,
  });

  return <SupermarketCategoryDataContext.Provider value={result}>{children}</SupermarketCategoryDataContext.Provider>;
}

export default SupermarketCategoryDataProvider;

export function useSupermarketCategoryData() {
  return useContext(SupermarketCategoryDataContext);
}
