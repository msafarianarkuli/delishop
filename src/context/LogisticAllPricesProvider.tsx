import {createContext, useContext} from "react";
import {IDataContextProvider} from "types/interfaces";
import {useQuery} from "react-query";
import {ReactQueryKey} from "utils/Const";
import getLogisticAllPrice from "api/getLogisticAllPrice";

const initialState: IDataContextProvider<any> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const LogisticAllPricesContext = createContext<IDataContextProvider<any>>(initialState);

const staleTime = 60 * 60 * 1000;

function LogisticAllPriceProvider({children}: {children: JSX.Element}) {
  const result = useQuery<any>([ReactQueryKey.LOGISTIC_ALL_PRICES], () => getLogisticAllPrice(), {
    staleTime,
  });

  return <LogisticAllPricesContext.Provider value={result}>{children}</LogisticAllPricesContext.Provider>;
}

export default LogisticAllPriceProvider;

export function useLogisticAllPrices() {
  return useContext(LogisticAllPricesContext);
}
