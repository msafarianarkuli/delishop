import React, {createContext, useContext, useMemo} from "react";
import {IGetSuggestionSearchData} from "types/interfaceSuggestionSearch";
import {createKeyForUseQuery, hasNextPage} from "utils/utils";
import {useRouter} from "next/router";
import {useInfiniteQuery, UseInfiniteQueryResult} from "react-query";
import getSuggestionSearch from "api/getSuggestionSearch";
import usePathnameQuery from "hooks/usePathnameQuery";

// @ts-ignore
const initialState: UseInfiniteQueryResult<IGetSuggestionSearchData> = {};

const SearchPageDataContext = createContext<UseInfiniteQueryResult<IGetSuggestionSearchData>>(initialState);

const staleTime = 10 * 60 * 1000;

export const QUERY_KEY_SUGGESTION_SEARCH = "suggestionSearch";
export const suggestionSearchCategoryQuery = "category[]";
export const suggestionSearchNameQuery = "name";

function SearchPageDataProvider({children}: {children: JSX.Element[]}) {
  const router = useRouter();
  const {pathname} = usePathnameQuery();

  const categoryId = useMemo(() => {
    if (pathname.search("/restaurant") !== -1) return 1;
    if (pathname.search("/supermarket") !== -1) return 2;
    return 0;
  }, [pathname]);

  const name = useMemo(() => {
    const name = router.query[suggestionSearchNameQuery];
    if (name && !Array.isArray(name)) {
      return decodeURI(name);
    }
    return "";
  }, [router.query]);

  const params = useMemo(() => {
    let tmpParams: {[x: string]: any} = {};
    if (router.isReady) {
      tmpParams = {
        ...tmpParams,
        ...router.query,
      };
      if (categoryId) {
        tmpParams[suggestionSearchCategoryQuery] = categoryId;
      }
      if (name) {
        tmpParams[suggestionSearchNameQuery] = name;
      }
    }
    return tmpParams;
  }, [categoryId, name, router.isReady, router.query]);

  const keys = useMemo(() => {
    let tmpKeys: (string | number)[] = [QUERY_KEY_SUGGESTION_SEARCH];
    if (categoryId) {
      tmpKeys = createKeyForUseQuery(tmpKeys, categoryId.toString());
    }
    if (name) {
      tmpKeys = createKeyForUseQuery(tmpKeys, name);
    }
    return tmpKeys;
  }, [categoryId, name]);

  const useQueryEnabled = useMemo(() => router.isReady && !!router.query.name, [router.isReady, router.query.name]);

  const result = useInfiniteQuery(keys, () => getSuggestionSearch(params), {
    staleTime,
    enabled: useQueryEnabled,
    getNextPageParam: (lastPage, allPages) => {
      const totalProducts = lastPage.products_suggest.totalCount;
      const totalVendors = lastPage.vendors_suggest.totalCount;
      const page = allPages.length;
      if (hasNextPage({page, total: totalProducts}) || hasNextPage({page, total: totalVendors})) {
        return page + 1;
      }
      return undefined;
    },
  });

  return <SearchPageDataContext.Provider value={result}>{children}</SearchPageDataContext.Provider>;
}

export default SearchPageDataProvider;

export function useSearchPageData() {
  return useContext(SearchPageDataContext);
}
