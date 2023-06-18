import {createContext, ReactNode, useContext, useMemo} from "react";
import {useInfiniteQuery, UseInfiniteQueryResult} from "react-query";
import getSupermarketGroupProducts, {IGetSupermarketGroupProductsRes} from "api/getSupermarketGroupProducts";
import {useRouter} from "next/router";
import {createKeyForUseQuery, createPaginationParams, hasNextPage} from "utils/utils";
import {ReactQueryKey} from "utils/Const";

// @ts-ignore
const initialState: UseInfiniteQueryResult<IGetSupermarketGroupProductsRes> = {};

const VendorSubcategoryDataContext =
  createContext<UseInfiniteQueryResult<IGetSupermarketGroupProductsRes>>(initialState);

const staleTime = 10 * 60 * 1000;

function VendorSubcategoryDataProvider({children}: {children: ReactNode}) {
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
      delete tmpParams.subcategory;
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

  const keys = useMemo(() => {
    let tmpKeys: (string | number)[] = [ReactQueryKey.VENDOR_SUBCATEGORY_GROUP_PRODUCTS];
    tmpKeys = createKeyForUseQuery(tmpKeys, vendorId);
    tmpKeys = createKeyForUseQuery(tmpKeys, categoryId);
    tmpKeys = createKeyForUseQuery(tmpKeys, subcategoryId);
    return tmpKeys;
  }, [categoryId, subcategoryId, vendorId]);

  const result = useInfiniteQuery(
    keys,
    ({pageParam}) => getSupermarketGroupProducts({params, categoryId: subcategoryId, vendorId, pageParam}),
    {
      staleTime,
      enabled: router.isReady,
      getNextPageParam: (lastPage, allPages) => {
        const total = lastPage.totalCount;
        const page = allPages.length;
        if (hasNextPage({page, total})) {
          return page + 1;
        }
        return undefined;
      },
    }
  );

  return <VendorSubcategoryDataContext.Provider value={result}>{children}</VendorSubcategoryDataContext.Provider>;
}

export default VendorSubcategoryDataProvider;

export function useVendorSubcategoryData() {
  return useContext(VendorSubcategoryDataContext);
}
