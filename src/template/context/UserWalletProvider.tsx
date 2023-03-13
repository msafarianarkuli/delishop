import React, {createContext, useContext} from "react";
import {IDataContextProvider} from "types/interfaces";
import {useSession} from "next-auth/react";
import {useQuery} from "react-query";
import getUserWallet from "api/getUserWallet";

interface UserWalletProvider {
  children: JSX.Element | JSX.Element[];
}

const initialState: IDataContextProvider<number> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const UserWalletContext = createContext<IDataContextProvider<number>>(initialState);

export const QUERY_KEY_USER_WALLET = "userWallet";
const staleTime = 60 * 60 * 1000;

function UserWalletProvider({children}: UserWalletProvider) {
  const {status, data} = useSession();

  const result = useQuery<number>([QUERY_KEY_USER_WALLET], () => getUserWallet(data?.user.token || ""), {
    staleTime,
    enabled: status === "authenticated",
  });
  return <UserWalletContext.Provider value={result}>{children}</UserWalletContext.Provider>;
}

export default UserWalletProvider;

export function useUserWallet() {
  return useContext(UserWalletContext);
}
