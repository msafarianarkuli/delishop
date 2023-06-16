import {createContext, useContext} from "react";
import {IDataContextProvider} from "types/interfaces";
import {useQuery} from "react-query";
import getLogisticCurrentPrice from "api/getLogisticCurrentPrice";
import {ReactQueryKey} from "utils/Const";

const initialState: IDataContextProvider<number> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const LogisticPriceContext = createContext<IDataContextProvider<number>>(initialState);

const staleTime = 60 * 60 * 1000;

function LogisticPriceProvider({children}: {children: JSX.Element}) {
  const result = useQuery<number>([ReactQueryKey.LOGISTIC_CURRENT_PRICE], () => getLogisticCurrentPrice(), {
    staleTime,
  });

  return <LogisticPriceContext.Provider value={result}>{children}</LogisticPriceContext.Provider>;
}

export default LogisticPriceProvider;

export function useLogisticPrice() {
  return useContext(LogisticPriceContext);
}
