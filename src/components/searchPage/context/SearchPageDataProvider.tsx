import {createContext, ReactNode, useContext, useMemo} from "react";
import {IGetSuggestionSearchData} from "types/interfaceSuggestionSearch";
import {createKeyForUseQuery} from "utils/utils";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import getSuggestionSearch from "api/getSuggestionSearch";
import {IDataContextProvider} from "types/interfaces";
import {EVendorsId} from "utils/Const";

const initialState: IDataContextProvider<IGetSuggestionSearchData> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const SearchPageDataContext = createContext<IDataContextProvider<IGetSuggestionSearchData>>(initialState);

const staleTime = 10 * 60 * 1000;

export const QUERY_KEY_SUGGESTION_SEARCH = "suggestionSearch";
export const suggestionSearchCategoryQuery = "category[]";
export const suggestionSearchNameQuery = "name";

interface ISearchPageDataProvider {
  children: ReactNode;
  vendorId?: EVendorsId;
}

function SearchPageDataProvider(props: ISearchPageDataProvider) {
  const {vendorId, children} = props;
  const router = useRouter();
  // const {pathname} = usePathnameQuery();

  // const categoryId = useMemo(() => {
  //   if (pathname.search("/restaurant") !== -1) return 1;
  //   if (pathname.search("/supermarket") !== -1) return 2;
  //   return 0;
  // }, [pathname]);

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
      // if (categoryId) {
      //   tmpParams[suggestionSearchCategoryQuery] = categoryId;
      // }
      delete tmpParams?.vendor;
      if (vendorId) {
        tmpParams[suggestionSearchCategoryQuery] = vendorId;
      }
      if (name) {
        tmpParams[suggestionSearchNameQuery] = name;
      }
    }
    return tmpParams;
  }, [name, router.isReady, router.query, vendorId]);

  const keys = useMemo(() => {
    let tmpKeys: (string | number)[] = [QUERY_KEY_SUGGESTION_SEARCH];
    // if (categoryId) {
    //   tmpKeys = createKeyForUseQuery(tmpKeys, categoryId.toString());
    // }
    if (vendorId) {
      tmpKeys = createKeyForUseQuery(tmpKeys, vendorId.toString());
    }
    if (name) {
      tmpKeys = createKeyForUseQuery(tmpKeys, name);
    }
    return tmpKeys;
  }, [name, vendorId]);

  const useQueryEnabled = useMemo(() => router.isReady && !!router.query.name, [router.isReady, router.query.name]);

  const result = useQuery(keys, () => getSuggestionSearch({params}), {
    staleTime,
    enabled: useQueryEnabled,
  });

  return <SearchPageDataContext.Provider value={result}>{children}</SearchPageDataContext.Provider>;
}

export default SearchPageDataProvider;

export function useSearchPageData() {
  return useContext(SearchPageDataContext);
}
