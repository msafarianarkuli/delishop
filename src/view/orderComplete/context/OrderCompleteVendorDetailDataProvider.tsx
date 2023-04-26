import {createContext, useCallback, useContext, useMemo} from "react";
import {IDataContextProvider} from "types/interfaces";
import {IGetVendorsDetailVendor} from "types/interfaceVendorDetail";
import useCartRestaurant from "hooks/useCartRestaurant";
import useCartSupermarket from "hooks/useCartSupermarket";
import getVendorDetail from "api/getVendorDetail";
import getSupermarketDetail from "api/getSupermarketDetail";
import {useRouter} from "next/router";
import {useQuery} from "react-query";

const initialState: IDataContextProvider<IGetVendorsDetailVendor | null> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const OrderCompleteVendorDetailDataContext =
  createContext<IDataContextProvider<IGetVendorsDetailVendor | null>>(initialState);

export const QUERY_KEY_ORDER_COMPLETE_VENDOR_DETAIL = "orderCompleteVendorDetail";
const staleTime = 10 * 60 * 1000;

function OrderCompleteVendorDetailDataProvider({children}: {children: JSX.Element}) {
  const router = useRouter();
  const restaurant = useCartRestaurant();
  const supermarket = useCartSupermarket();

  const getData = useCallback(() => {
    if (restaurant?.vendorId) {
      return getVendorDetail({id: restaurant.vendorId}).then((res) => res.vendor);
    } else if (supermarket?.vendorId) {
      return getSupermarketDetail({id: supermarket.vendorId}).then((res) => res.vendor);
    }
    return null;
  }, [restaurant?.vendorId, supermarket?.vendorId]);

  const queryKey = useMemo(() => {
    const key: string[] = [QUERY_KEY_ORDER_COMPLETE_VENDOR_DETAIL];
    if (restaurant?.vendorId) {
      key.push(restaurant.vendorId);
    } else if (supermarket?.vendorId) {
      key.push(supermarket.vendorId);
    }
    return key;
  }, [restaurant?.vendorId, supermarket?.vendorId]);

  const useQueryEnabled = useMemo(
    () => router.isReady && (!!restaurant?.vendorId || !!supermarket?.vendorId),
    [restaurant?.vendorId, router.isReady, supermarket?.vendorId]
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
