import React, {createContext, useContext, useMemo} from "react";
import {IDataContextProvider} from "types/interfaces";
import getSupermarketGroupProducts, {IGetSupermarketGroupProductsRes} from "api/getSupermarketGroupProducts";
import {useRouter} from "next/router";
import {createKeyForUseQuery, createPaginationParams} from "utils/utils";
import {useQuery} from "react-query";

interface ISupermarketSubcategoryDataProvider {
  children: JSX.Element;
}

const initialState: IDataContextProvider<IGetSupermarketGroupProductsRes> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const SupermarketSubcategoryDataContext =
  createContext<IDataContextProvider<IGetSupermarketGroupProductsRes>>(initialState);

export const QUERY_KEY_SUPERMARKET_GROUP_PRODUCTS = "supermarketGroupProducts";

const staleTime = 10 * 60 * 1000;

function SupermarketSubcategoryDataProvider({children}: ISupermarketSubcategoryDataProvider) {
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

  const subcategoryId = useMemo(() => {
    const id = router.query.subcategory;
    if (id && !Array.isArray(id)) {
      return id;
    }
    return "";
  }, [router.query.subcategory]);

  const page = useMemo(() => {
    const page = router.query.page;
    if (page && !Array.isArray(page)) {
      return page;
    }
    return "1";
  }, [router.query.page]);

  const keys = useMemo(() => {
    let tmpKeys: (string | number)[] = [QUERY_KEY_SUPERMARKET_GROUP_PRODUCTS];
    tmpKeys = createKeyForUseQuery(tmpKeys, vendorId);
    tmpKeys = createKeyForUseQuery(tmpKeys, categoryId);
    tmpKeys = createKeyForUseQuery(tmpKeys, subcategoryId);
    tmpKeys = createKeyForUseQuery(tmpKeys, page);
    return tmpKeys;
  }, [categoryId, page, subcategoryId, vendorId]);

  const result = useQuery(keys, () => getSupermarketGroupProducts({params, categoryId: subcategoryId, vendorId}), {
    staleTime,
    enabled: router.isReady,
  });

  return (
    <SupermarketSubcategoryDataContext.Provider value={result}>{children}</SupermarketSubcategoryDataContext.Provider>
  );
}

export default SupermarketSubcategoryDataProvider;

export function useSupermarketSubcategoryData() {
  return useContext(SupermarketSubcategoryDataContext);
}
