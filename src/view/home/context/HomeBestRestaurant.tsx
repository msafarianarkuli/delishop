import {createContext, ReactNode, useContext, useMemo} from "react";
import {UseInfiniteQueryResult} from "react-query";
import {IGetVendorsRes} from "api/getVendors";
import useVendorListResult from "hooks/useVendorListResult";
import {ReactQueryKey, vendorsAddress} from "utils/Const";
import {useRouter} from "next/router";

// @ts-ignore
const initialState: UseInfiniteQueryResult<IGetVendorsRes> = {};

const VendorBestRestuarantDataContext = createContext<UseInfiniteQueryResult<IGetVendorsRes>>(initialState);

const staleTime = 10 * 60 * 1000;

function VendorBestRestuarantDataProvider({children}: {children: ReactNode}) {
  const router = useRouter();
  const categoryId = useMemo(() => {
    const vendor = vendorsAddress.find((item) => item.name === "restaurant");
    if (router.isReady && vendor?.id) {
      return [vendor.id];
    }
    return [];
  }, [router.isReady, router.query.vendor]);

  const result = useVendorListResult({
    categoryId,
    queryKey: ReactQueryKey.VENDOR,
    staleTime,
  });

  return <VendorBestRestuarantDataContext.Provider value={result}>{children}</VendorBestRestuarantDataContext.Provider>;
}

export default VendorBestRestuarantDataProvider;

export function useVendorBestRestuarantData() {
  return useContext(VendorBestRestuarantDataContext);
}
