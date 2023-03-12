import React, {createContext, useContext} from "react";
import {IDataContextProvider} from "types/interfaces";
import {useSession} from "next-auth/react";
import {useQuery} from "react-query";
import getUserCoin from "api/getUserCoint";

interface IUserCoinProvider {
  children: JSX.Element[];
}

const initialState: IDataContextProvider<number> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const UserCoinContext = createContext<IDataContextProvider<number>>(initialState);

export const QUERY_KEY_USER_COIN = "restaurantDetail";
const staleTime = 60 * 60 * 1000;

function UserCoinProvider({children}: IUserCoinProvider) {
  const {status, data} = useSession();

  const result = useQuery<number>([QUERY_KEY_USER_COIN], () => getUserCoin(data?.user.token || ""), {
    staleTime,
    enabled: status === "authenticated",
  });
  return <UserCoinContext.Provider value={result}>{children}</UserCoinContext.Provider>;
}

export default UserCoinProvider;

export function useUserCoin() {
  return useContext(UserCoinContext);
}
