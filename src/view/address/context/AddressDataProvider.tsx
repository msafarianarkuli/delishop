import {createContext, useContext} from "react";
import {IDataContextProvider} from "types/interfaces";
import {TGetUserAddressesListAddresses} from "types/interfaceUserAddress";
import {useQuery} from "react-query";
import {useSession} from "next-auth/react";
import getUserAddresses from "api/getUserAddresses";

const initialState: IDataContextProvider<TGetUserAddressesListAddresses> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const AddressDataContext = createContext<IDataContextProvider<TGetUserAddressesListAddresses>>(initialState);

export const QUERY_KEY_USER_ADDRESSES = "userAddresses";
const staleTime = 10 * 60 * 1000;

function AddressDataProvider({children}: {children: JSX.Element}) {
  const {status, data} = useSession();

  const result = useQuery<TGetUserAddressesListAddresses>(
    [QUERY_KEY_USER_ADDRESSES],
    () => getUserAddresses(data?.user.token || ""),
    {
      staleTime,
      enabled: status === "authenticated",
    }
  );

  return <AddressDataContext.Provider value={result}>{children}</AddressDataContext.Provider>;
}

export default AddressDataProvider;

export function useAddressData() {
  return useContext(AddressDataContext);
}
