import React, {createContext, useContext} from "react";
import {IDataContextProvider} from "types/interfaces";
import {TGetUserAddressesListAddresses} from "types/interfaceUserAddress";
import {useSession} from "next-auth/react";
import {useQuery} from "react-query";
import getUserAddresses, {QUERY_KEY_USER_ADDRESSES} from "api/getUserAddresses";

const initialState: IDataContextProvider<TGetUserAddressesListAddresses> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const OrderCompleteAddressContext = createContext<IDataContextProvider<TGetUserAddressesListAddresses>>(initialState);

const staleTime = 10 * 60 * 1000;

function OrderCompleteAddressProvider({children}: {children: JSX.Element}) {
  const {status, data} = useSession();

  const result = useQuery<TGetUserAddressesListAddresses>(
    [QUERY_KEY_USER_ADDRESSES],
    () => getUserAddresses(data?.user.token || ""),
    {
      staleTime,
      enabled: status === "authenticated",
    }
  );

  return <OrderCompleteAddressContext.Provider value={result}>{children}</OrderCompleteAddressContext.Provider>;
}

export default OrderCompleteAddressProvider;

export function useOrderCompleteAddress() {
  return useContext(OrderCompleteAddressContext);
}
