import {useMemo} from "react";
import {useRouter} from "next/router";
import {vendorsAddress} from "utils/Const";

function useVendorType() {
  const router = useRouter();
  return useMemo(() => {
    const vendorQuery = router.query.vendor;
    const vendor = vendorsAddress.find((item) => item.name === vendorQuery);
    if (router.isReady && vendor) {
      return vendor;
    }
    return null;
  }, [router.isReady, router.query.vendor]);
}

export default useVendorType;
