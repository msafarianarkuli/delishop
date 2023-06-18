import {createContext, ReactNode, useContext, useMemo} from "react";
import {UseInfiniteQueryResult} from "react-query";
import {IGetVendorsRes} from "api/getVendors";
import useVendorListResult from "hooks/useVendorListResult";
import {ReactQueryKey, vendorsAddress} from "utils/Const";
import {useRouter} from "next/router";

// @ts-ignore
const initialState: UseInfiniteQueryResult<IGetVendorsRes> = {};

const VendorDataContext = createContext<UseInfiniteQueryResult<IGetVendorsRes>>(initialState);

const staleTime = 10 * 60 * 1000;

function VendorDataProvider({children}: {children: ReactNode}) {
  const router = useRouter();
  const categoryId = useMemo(() => {
    const vendor = vendorsAddress.find((item) => item.name === router.query.vendor);
    if (router.isReady && vendor?.id) {
      return [vendor.id];
    }
    return [];
  }, [router.isReady, router.query.vendor]);

  const result = useVendorListResult({
    categoryId,
    queryKey: ReactQueryKey.VENDOR,
    filterQuery: [ReactQueryKey.VENDOR_FILTER_SORT, ReactQueryKey.VENDOR_FILTER_TAGE],
    staleTime,
  });

  return <VendorDataContext.Provider value={result}>{children}</VendorDataContext.Provider>;
}

export default VendorDataProvider;

export function useVendorData() {
  return useContext(VendorDataContext);
}
