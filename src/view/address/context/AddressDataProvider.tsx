import {createContext, useContext} from "react";
import {IDataContextProvider} from "types/interfaces";
import {TGetUserAddressesListAddresses} from "types/interfaceUserAddress";
import {useQuery} from "react-query";
import {getUserAddresses} from "api";
import {useSession} from "next-auth/react";

const initialState: IDataContextProvider<TGetUserAddressesListAddresses> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const AddressDataContext = createContext<IDataContextProvider<TGetUserAddressesListAddresses>>(initialState);

export const USER_ADDRESSES_KEY = "userAddresses";
const staleTime = 10 * 60 * 1000;

function AddressDataProvider({children}: {children: JSX.Element}) {
  const {status, data} = useSession();

  const result = useQuery<TGetUserAddressesListAddresses>(
    [USER_ADDRESSES_KEY],
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
