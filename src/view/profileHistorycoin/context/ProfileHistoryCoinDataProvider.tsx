import React, {createContext, useContext, useMemo} from "react";
import {IDataContextProvider} from "types/interfaces";
import {IUserCoinHistoryData} from "types/interfaceUserCoinHistory";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import {createKeyForUseQuery, createPaginationParams} from "utils/utils";
import {useQuery} from "react-query";
import getUserCoinHistory, {userAwardReceivedCouponQuery} from "api/getUserCoinHistory";

interface IProfileHistoryCoinDataProvider {
  children: JSX.Element;
}

const initialState: IDataContextProvider<IUserCoinHistoryData> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const ProfileHistoryCoinDataContext = createContext<IDataContextProvider<IUserCoinHistoryData>>(initialState);

export const QUERY_KEY_USER_COIN_HISTORY = "userCoinHistory";

const staleTime = 10 * 60 * 1000;

function ProfileHistoryCoinDataProvider({children}: IProfileHistoryCoinDataProvider) {
  const router = useRouter();
  const {status, data} = useSession();

  const params = useMemo(() => {
    let tmpParams: {[x: string]: any} = {
      [userAwardReceivedCouponQuery]: 0,
    };
    if (router.isReady) {
      tmpParams = {
        ...tmpParams,
        ...router.query,
      };
      tmpParams = createPaginationParams(tmpParams);
    }
    return tmpParams;
  }, [router.isReady, router.query]);

  const keys = useMemo(() => {
    let tmpKeys: (string | number)[] = [QUERY_KEY_USER_COIN_HISTORY];
    const page = router.query?.page;
    tmpKeys = createKeyForUseQuery(tmpKeys, page);
    return tmpKeys;
  }, [router.query]);

  const useQueryEnabled = useMemo(() => status === "authenticated" && router.isReady, [router.isReady, status]);

  const result = useQuery(keys, () => getUserCoinHistory({params, token: data?.user.token || ""}), {
    staleTime,
    enabled: useQueryEnabled,
  });

  return <ProfileHistoryCoinDataContext.Provider value={result}>{children}</ProfileHistoryCoinDataContext.Provider>;
}

export default ProfileHistoryCoinDataProvider;

export function useProfileHistoryCoinData() {
  return useContext(ProfileHistoryCoinDataContext);
}
