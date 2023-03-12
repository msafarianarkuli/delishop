import React, {createContext, useContext} from "react";
import {IDataContextProvider} from "types/interfaces";
import {useSession} from "next-auth/react";
import {useQuery} from "react-query";
import getUserCoin from "api/getUserCoint";

interface ProfileWalletDataProvider {
  children: JSX.Element;
}

const initialState: IDataContextProvider<number> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const UserCoinContext = createContext<IDataContextProvider<number>>(initialState);

export const QUERY_KEY_USER_WALLET = "userWallet";
const staleTime = 60 * 60 * 1000;

function ProfileWalletDataProvider({children}: ProfileWalletDataProvider) {
  const {status, data} = useSession();

  const result = useQuery<number>([QUERY_KEY_USER_WALLET], () => getUserCoin(data?.user.token || ""), {
    staleTime,
    enabled: status === "authenticated",
  });

  return <UserCoinContext.Provider value={result}>{children}</UserCoinContext.Provider>;
}

export default ProfileWalletDataProvider;

export function useProfileWalletData() {
  return useContext(UserCoinContext);
}
