import {useEffect, useMemo} from "react";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import usePathnameQuery from "hooks/usePathnameQuery";

function useRedirectToMap() {
  const router = useRouter();
  const {status} = useSession();
  const {location, isStorageLoaded, isUserAddressStorageLoaded, userAddress} = useSelector(selectAddressMap);
  const {querySearch, pathname} = usePathnameQuery();
  const query = useMemo(() => new URLSearchParams(querySearch), [querySearch]);

  useEffect(() => {
    if (isStorageLoaded && isUserAddressStorageLoaded && status !== "loading") {
      const noLocation = !location?.lat && !location?.lng && !userAddress?.latitude && !userAddress?.longitude;
      if (noLocation) {
        let url = "";
        query.set("callbackUrl", encodeURI(pathname));
        if (status === "authenticated") {
          url = `/address`;
        } else {
          url = `/address/map`;
        }
        url += query.toString() ? `?${query.toString()}` : "";
        router.replace(url);
      }
    }
  }, [
    isStorageLoaded,
    isUserAddressStorageLoaded,
    location,
    pathname,
    query,
    router,
    status,
    userAddress?.latitude,
    userAddress?.longitude,
  ]);

  const hidePage = useMemo(
    () => !location?.lat && !location?.lng && !userAddress?.latitude && !userAddress?.longitude && status !== "loading",
    [location?.lat, location?.lng, status, userAddress?.latitude, userAddress?.longitude]
  );

  return {hidePage};
}

export default useRedirectToMap;
