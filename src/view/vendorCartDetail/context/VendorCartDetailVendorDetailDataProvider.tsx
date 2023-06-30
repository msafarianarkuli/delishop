import {createContext, ReactNode, useContext} from "react";
import {useQuery, UseQueryResult} from "react-query";
import {IGetVendorsDetailVendor} from "types/interfaceVendorDetail";
import {useVendorCartDetailParams} from "view/vendorCartDetail/context/VendorCartDetailParamsProvider";
import {ReactQueryKey} from "utils/Const";
import getSupermarketDetail from "api/getSupermarketDetail";
import {useRouter} from "next/router";

// @ts-ignore
const initialState: UseQueryResult<IGetVendorsDetailVendor> = {};

const VendorCartDetailVendorDetailDataContext = createContext<UseQueryResult<IGetVendorsDetailVendor>>(initialState);

const staleTime = 10 * 60 * 1000;

function VendorCartDetailVendorDetailDataProvider({children}: {children: ReactNode}) {
  const router = useRouter();
  const {id} = useVendorCartDetailParams();

  const result = useQuery<IGetVendorsDetailVendor>(
    [ReactQueryKey.VENDOR_DETAIL_SUPERMARKET, id],
    () => getSupermarketDetail({id}).then((res) => res.vendor),
    {staleTime, enabled: router.isReady && !!id}
  );

  return (
    <VendorCartDetailVendorDetailDataContext.Provider value={result}>
      {children}
    </VendorCartDetailVendorDetailDataContext.Provider>
  );
}

export default VendorCartDetailVendorDetailDataProvider;

export function useVendorCartDetailVendorDetailData() {
  return useContext(VendorCartDetailVendorDetailDataContext);
}
