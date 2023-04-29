import React, {createContext, useContext} from "react";
import {UseInfiniteQueryResult} from "react-query";
import {IUserCoinHistoryData} from "types/interfaceUserCoinHistory";
import useCoinHistoryListResult from "hooks/useCoinHistoryListResult";

// @ts-ignore
const initialState: UseInfiniteQueryResult<IUserCoinHistoryData> = {};

const ProfileWalletCouponDataContext = createContext<UseInfiniteQueryResult<IUserCoinHistoryData>>(initialState);

export const QUERY_KEY_USER_PROFILE_WALLET_COUPON = "profileWalletCoupon";

const staleTime = 10 * 60 * 1000;

function ProfileWalletCouponDataProvider({children}: {children: JSX.Element}) {
  const result = useCoinHistoryListResult({
    queryKey: QUERY_KEY_USER_PROFILE_WALLET_COUPON,
    couponId: 1,
    staleTime,
  });

  return <ProfileWalletCouponDataContext.Provider value={result}>{children}</ProfileWalletCouponDataContext.Provider>;
}

export default ProfileWalletCouponDataProvider;

export function useProfileWalletCouponData() {
  return useContext(ProfileWalletCouponDataContext);
}
