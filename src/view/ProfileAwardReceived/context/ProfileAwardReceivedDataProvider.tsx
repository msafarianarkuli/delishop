import {createContext, useContext, useMemo} from "react";
import {useRouter} from "next/router";
import {hasNextPage} from "utils/utils";
import {useInfiniteQuery, UseInfiniteQueryResult} from "react-query";
import {useSession} from "next-auth/react";
import getUserDiscount from "api/getUserDiscount";
import {IUserDiscountData} from "types/interfaceUserDiscount";

interface IProfileAwardReceivedDataProvider {
  children: JSX.Element;
}

// @ts-ignore
const initialState: UseInfiniteQueryResult<IUserDiscountData> = {};

const ProfileAwardReceivedDataContext = createContext<UseInfiniteQueryResult<IUserDiscountData>>(initialState);

export const QUERY_KEY_USER_AWARD_RECEIVED = "userAwardReceived";

const staleTime = 10 * 60 * 1000;

function ProfileAwardReceivedDataProvider({children}: IProfileAwardReceivedDataProvider) {
  const router = useRouter();
  const {status, data} = useSession();

  const useQueryEnabled = useMemo(() => status === "authenticated" && router.isReady, [router.isReady, status]);

  const result = useInfiniteQuery(
    QUERY_KEY_USER_AWARD_RECEIVED,
    ({pageParam}) => getUserDiscount({token: data?.user.token || "", pageParam}),
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

  return <ProfileAwardReceivedDataContext.Provider value={result}>{children}</ProfileAwardReceivedDataContext.Provider>;
}

export default ProfileAwardReceivedDataProvider;

export function useProfileAwardReceivedData() {
  return useContext(ProfileAwardReceivedDataContext);
}
