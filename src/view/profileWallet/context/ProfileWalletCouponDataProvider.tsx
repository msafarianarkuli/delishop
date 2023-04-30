import {createContext, useContext, useMemo} from "react";
import {useQuery, UseQueryResult} from "react-query";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import getUserCoupon from "api/getUserCoupon";
import {TUserCouponDataCoupons} from "types/interfaceUserCoupon";

// @ts-ignore
const initialState: UseQueryResult<TUserCouponDataCoupons> = {};

const ProfileWalletCouponDataContext = createContext<UseQueryResult<TUserCouponDataCoupons>>(initialState);

export const QUERY_KEY_USER_PROFILE_WALLET_COUPON = "profileWalletCoupon";

const staleTime = 10 * 60 * 1000;

function ProfileWalletCouponDataProvider({children}: {children: JSX.Element}) {
  const {status, data} = useSession();
  const router = useRouter();

  const useQueryEnabled = useMemo(() => status === "authenticated" && router.isReady, [router.isReady, status]);

  const result = useQuery(QUERY_KEY_USER_PROFILE_WALLET_COUPON, () => getUserCoupon({token: data?.user.token || ""}), {
    staleTime,
    enabled: useQueryEnabled,
  });

  return <ProfileWalletCouponDataContext.Provider value={result}>{children}</ProfileWalletCouponDataContext.Provider>;
}

export default ProfileWalletCouponDataProvider;

export function useProfileWalletCouponData() {
  return useContext(ProfileWalletCouponDataContext);
}
