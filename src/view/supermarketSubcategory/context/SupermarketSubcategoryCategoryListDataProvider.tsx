import {IDataContextProvider} from "types/interfaces";
import {IGetSupermarketDetailData} from "types/interfaceSupermarketDetail";
import {createContext, useContext} from "react";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import getSupermarketDetail, {QUERY_KEY_SUPERMARKET_DETAIL} from "api/getSupermarketDetail";

interface ISupermarketSubcategoryCategoryListDataProvider {
  children: JSX.Element;
}

const initialState: IDataContextProvider<IGetSupermarketDetailData> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const SupermarketSubcategoryCategoryListContext =
  createContext<IDataContextProvider<IGetSupermarketDetailData>>(initialState);

const staleTime = 10 * 60 * 1000;

function SupermarketSubcategoryCategoryListDataProvider({children}: ISupermarketSubcategoryCategoryListDataProvider) {
  const router = useRouter();

  const result = useQuery<IGetSupermarketDetailData, {status: number}>(
    [QUERY_KEY_SUPERMARKET_DETAIL, router.query.id],
    () => getSupermarketDetail({id: router.query.id as string}),
    {staleTime, enabled: router.isReady}
  );

  return (
    <SupermarketSubcategoryCategoryListContext.Provider value={result}>
      {children}
    </SupermarketSubcategoryCategoryListContext.Provider>
  );
}

export default SupermarketSubcategoryCategoryListDataProvider;

export function useSupermarketSubcategoryCategoryList() {
  return useContext(SupermarketSubcategoryCategoryListContext);
}
