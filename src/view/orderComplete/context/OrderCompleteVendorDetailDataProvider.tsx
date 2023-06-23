import {createContext, useCallback, useContext, useMemo} from "react";
import {IGetVendorsDetailVendor} from "types/interfaceVendorDetail";
import useCartRestaurant from "hooks/useCartRestaurant";
import getVendorDetail from "api/getVendorDetail";
import getSupermarketDetail from "api/getSupermarketDetail";
import {useRouter} from "next/router";
import {useQuery, UseQueryResult} from "react-query";
import {useOrderCompleteParams} from "view/orderComplete/context/OrderCompleteParamsProvider";
import {ReactQueryKey} from "utils/Const";

// @ts-ignore
const initialState: UseQueryResult<IGetVendorsDetailVendor | null, {status: number}> = {};

const OrderCompleteVendorDetailDataContext =
  createContext<UseQueryResult<IGetVendorsDetailVendor | null, {status: number}>>(initialState);

const staleTime = 10 * 60 * 1000;

function OrderCompleteVendorDetailDataProvider({children}: {children: JSX.Element}) {
  const router = useRouter();
  const restaurant = useCartRestaurant();
  const {isRestaurant, isSupermarket} = useOrderCompleteParams();

  const getData = useCallback(() => {
    if (restaurant?.vendorId) {
      if (isRestaurant) {
        return getVendorDetail({id: restaurant.vendorId}).then((res) => res.vendor);
      }
      if (isSupermarket) {
        return getSupermarketDetail({id: restaurant.vendorId}).then((res) => res.vendor);
      }
    }
    return null;
  }, [isRestaurant, isSupermarket, restaurant?.vendorId]);

  const queryKey = useMemo(() => {
    let key: string[] = [];
    if (restaurant?.vendorId) {
      if (isRestaurant) {
        key = [ReactQueryKey.ORDER_COMPLETE_RESTAURANT_DETAIL, restaurant.vendorId];
      }
      if (isSupermarket) {
        key = [ReactQueryKey.ORDER_COMPLETE_SUPERMARKET_DETAIL, restaurant.vendorId];
      }
    }
    return key;
  }, [isRestaurant, isSupermarket, restaurant?.vendorId]);

  const useQueryEnabled = useMemo(
    () => router.isReady && !!restaurant?.vendorId,
    [restaurant?.vendorId, router.isReady]
  );

  const result = useQuery<IGetVendorsDetailVendor | null, {status: number}>(queryKey, () => getData(), {
    staleTime,
    enabled: useQueryEnabled,
  });

  return (
    <OrderCompleteVendorDetailDataContext.Provider value={result}>
      {children}
    </OrderCompleteVendorDetailDataContext.Provider>
  );
}

export default OrderCompleteVendorDetailDataProvider;

export function useOrderCompleteVendorDetailData() {
  return useContext(OrderCompleteVendorDetailDataContext);
}
