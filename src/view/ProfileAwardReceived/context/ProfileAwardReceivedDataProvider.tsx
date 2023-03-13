import React, {createContext, useContext, useMemo} from "react";
import {IDataContextProvider} from "types/interfaces";
import {IUserCoinHistoryData} from "types/interfaceUserCoinHistory";
import {useRouter} from "next/router";
import {createKeyForUseQuery, createPaginationParams} from "utils/utils";
import {useQuery} from "react-query";
import {useSession} from "next-auth/react";
import getUserCoinHistory, {userAwardReceivedCouponQuery} from "api/getUserCoinHistory";

interface IProfileAwardReceivedDataProvider {
  children: JSX.Element;
}

const initialState: IDataContextProvider<IUserCoinHistoryData> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const ProfileAwardReceivedDataContext = createContext<IDataContextProvider<IUserCoinHistoryData>>(initialState);

export const QUERY_KEY_USER_AWARD_RECEIVED = "userAwardReceived";

const staleTime = 10 * 60 * 1000;

function ProfileAwardReceivedDataProvider({children}: IProfileAwardReceivedDataProvider) {
  const router = useRouter();
  const {status, data} = useSession();

  const params = useMemo(() => {
    let tmpParams: {[x: string]: any} = {
      [userAwardReceivedCouponQuery]: 1,
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
    let tmpKeys: (string | number)[] = [QUERY_KEY_USER_AWARD_RECEIVED];
    const page = router.query?.page;
    tmpKeys = createKeyForUseQuery(tmpKeys, page);
    return tmpKeys;
  }, [router.query]);

  const useQueryEnabled = useMemo(() => status === "authenticated" && router.isReady, [router.isReady, status]);

  const result = useQuery(keys, () => getUserCoinHistory({params, token: data?.user.token || ""}), {
    staleTime,
    enabled: useQueryEnabled,
  });

  return <ProfileAwardReceivedDataContext.Provider value={result}>{children}</ProfileAwardReceivedDataContext.Provider>;
}

export default ProfileAwardReceivedDataProvider;

export function useProfileAwardReceivedData() {
  return useContext(ProfileAwardReceivedDataContext);
}
