import {useMemo} from "react";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import {useInfiniteQuery} from "react-query";
import getUserCoinHistory, {userAwardReceivedCouponQuery} from "api/getUserCoinHistory";
import {hasNextPage} from "utils/utils";

interface IUseCoinHistoryListResult {
  queryKey: string;
  couponId: number;
  staleTime?: number;
}

function useCoinHistoryListResult(props: IUseCoinHistoryListResult) {
  const {staleTime, couponId, queryKey} = props;
  const router = useRouter();
  const {status, data} = useSession();

  const params = useMemo(
    () => ({
      [userAwardReceivedCouponQuery]: couponId,
    }),
    [couponId]
  );

  const useQueryEnabled = useMemo(() => status === "authenticated" && router.isReady, [router.isReady, status]);

  return useInfiniteQuery(
    queryKey,
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
}

export default useCoinHistoryListResult;
