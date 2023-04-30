import {createContext, useContext, useMemo} from "react";
import {IUserCoinHistoryData} from "types/interfaceUserCoinHistory";
import {useInfiniteQuery, UseInfiniteQueryResult} from "react-query";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import getUserCoinHistory, {userAwardReceivedCouponQuery} from "api/getUserCoinHistory";
import {hasNextPage} from "utils/utils";

interface IProfileHistoryCoinDataProvider {
  children: JSX.Element;
}

// @ts-ignore
const initialState: UseInfiniteQueryResult<IUserCoinHistoryData> = {};

const ProfileHistoryCoinDataContext = createContext<UseInfiniteQueryResult<IUserCoinHistoryData>>(initialState);

export const QUERY_KEY_USER_COIN_HISTORY = "userCoinHistory";

const staleTime = 10 * 60 * 1000;

function ProfileHistoryCoinDataProvider({children}: IProfileHistoryCoinDataProvider) {
  const router = useRouter();
  const {status, data} = useSession();

  const params = useMemo(
    () => ({
      [userAwardReceivedCouponQuery]: 0,
    }),
    []
  );

  const useQueryEnabled = useMemo(() => status === "authenticated" && router.isReady, [router.isReady, status]);

  const result = useInfiniteQuery(
    QUERY_KEY_USER_COIN_HISTORY,
    ({pageParam}) => getUserCoinHistory({params, token: data?.user.token || "", pageParam}),
    {
      staleTime,
      enabled: useQueryEnabled,
      getNextPageParam: (lastPage, allPages) => {
        const total = lastPage.totalCount;
        const page = allPages.length;
        if (hasNextPage({page, total})) {
          return page + 1;
        }
        return undefined;
      },
    }
  );

  return <ProfileHistoryCoinDataContext.Provider value={result}>{children}</ProfileHistoryCoinDataContext.Provider>;
}

export default ProfileHistoryCoinDataProvider;

export function useProfileHistoryCoinData() {
  return useContext(ProfileHistoryCoinDataContext);
}
