import {TSupermarketProductsListDataGroups} from "types/interfaceSupermarketProductsList";
import React, {createContext, ReactNode, useContext, useMemo} from "react";
import {useQuery, UseQueryResult} from "react-query";
import {useRouter} from "next/router";
import {createKeyForUseQuery} from "utils/utils";
import getSupermarketProducts from "api/getSupermarketProducts";
import {ReactQueryKey} from "utils/Const";

// @ts-ignore
const initialState: UseQueryResult<TSupermarketProductsListDataGroups> = {};

const VendorCategoryDataContext = createContext<UseQueryResult<TSupermarketProductsListDataGroups>>(initialState);

const staleTime = 10 * 60 * 1000;

function VendorCategoryDataProvider({children}: {children: ReactNode}) {
  const router = useRouter();
  const params = useMemo(() => {
    let tmpParams: {[x: string]: any} = {};
    if (router.isReady) {
      tmpParams = {
        ...tmpParams,
        ...router.query,
      };
      delete tmpParams.vendor;
      delete tmpParams.id;
      delete tmpParams.category;
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
    let tmpKeys: (string | number)[] = [ReactQueryKey.VENDOR_CATEGORY_PRODUCT_LIST];
    tmpKeys = createKeyForUseQuery(tmpKeys, vendorId);
    tmpKeys = createKeyForUseQuery(tmpKeys, categoryId);
    return tmpKeys;
  }, [categoryId, vendorId]);

  const result = useQuery(keys, () => getSupermarketProducts({params, categoryId, vendorId}), {
    staleTime,
    enabled: router.isReady,
  });

  return <VendorCategoryDataContext.Provider value={result}>{children}</VendorCategoryDataContext.Provider>;
}

export default VendorCategoryDataProvider;

export function useVendorCategoryData() {
  return useContext(VendorCategoryDataContext);
}
