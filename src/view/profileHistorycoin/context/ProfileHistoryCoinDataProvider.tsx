import {createContext, useContext} from "react";
import useCoinHistoryListResult from "hooks/useCoinHistoryListResult";
import {IUserCoinHistoryData} from "types/interfaceUserCoinHistory";
import {UseInfiniteQueryResult} from "react-query";

interface IProfileHistoryCoinDataProvider {
  children: JSX.Element;
}

// @ts-ignore
const initialState: UseInfiniteQueryResult<IUserCoinHistoryData> = {};

const ProfileHistoryCoinDataContext = createContext<UseInfiniteQueryResult<IUserCoinHistoryData>>(initialState);

export const QUERY_KEY_USER_COIN_HISTORY = "userCoinHistory";

const staleTime = 10 * 60 * 1000;

function ProfileHistoryCoinDataProvider({children}: IProfileHistoryCoinDataProvider) {
  const result = useCoinHistoryListResult({
    queryKey: QUERY_KEY_USER_COIN_HISTORY,
    couponId: 0,
    staleTime,
  });

  return <ProfileHistoryCoinDataContext.Provider value={result}>{children}</ProfileHistoryCoinDataContext.Provider>;
}

export default ProfileHistoryCoinDataProvider;

export function useProfileHistoryCoinData() {
  return useContext(ProfileHistoryCoinDataContext);
}
