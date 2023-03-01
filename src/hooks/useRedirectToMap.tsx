import {useEffect, useMemo} from "react";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import usePathnameQuery from "hooks/usePathnameQuery";

function useRedirectToMap() {
  const router = useRouter();
  const {status} = useSession();
  const {location, isStorageLoaded} = useSelector(selectAddressMap);
  const {querySearch, pathname} = usePathnameQuery();
  const query = useMemo(() => new URLSearchParams(querySearch), [querySearch]);

  useEffect(() => {
    if ((!location?.lat || !location.lng) && isStorageLoaded) {
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
  }, [isStorageLoaded, location, pathname, query, router, status]);

  return null;
}

export default useRedirectToMap;
