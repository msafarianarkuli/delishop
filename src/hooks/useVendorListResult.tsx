import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";
import {useMemo} from "react";
import {createKeyForUseQuery, createPaginationParams} from "utils/utils";
import {useQuery} from "react-query";
import getVendors from "api/getVendors";

interface IUseVendorListResult {
  queryKey: string;
  categoryId: number;
  filterQuery: string[];
  staleTime?: number;
}

function useVendorListResult(props: IUseVendorListResult) {
  const {queryKey, categoryId, filterQuery, staleTime} = props;
  const router = useRouter();
  const {isStorageLoaded, location, userAddress, isUserAddressStorageLoaded} = useSelector(selectAddressMap);

  const params = useMemo(() => {
    let tmpParams: {[x: string]: any} = {
      "category[]": categoryId,
    };
    if (router.isReady) {
      tmpParams = {
        ...tmpParams,
        ...router.query,
      };
      tmpParams = createPaginationParams(tmpParams);
      if (isUserAddressStorageLoaded && isStorageLoaded) {
        if (userAddress?.latitude && userAddress.longitude) {
          tmpParams.lat = userAddress.latitude;
          tmpParams.lon = userAddress.longitude;
        } else if (location?.lat && location?.lng) {
          tmpParams.lat = location.lat;
          tmpParams.lon = location.lng;
        }
      }
      filterQuery.forEach((item) => {
        if (router.query.hasOwnProperty(item)) {
          tmpParams[item] = router.query[item];
        }
      });
    }
    return tmpParams;
  }, [
    categoryId,
    filterQuery,
    isStorageLoaded,
    isUserAddressStorageLoaded,
    location?.lat,
    location?.lng,
    router.isReady,
    router.query,
    userAddress?.latitude,
    userAddress?.longitude,
  ]);

  const keys = useMemo(() => {
    let tmpKeys: (string | number)[] = [queryKey];
    const page = router.query?.page;
    tmpKeys = createKeyForUseQuery(tmpKeys, page);
    if (isUserAddressStorageLoaded && isStorageLoaded) {
      if (userAddress?.latitude && userAddress.longitude) {
        tmpKeys = createKeyForUseQuery(tmpKeys, userAddress.latitude.toString());
        tmpKeys = createKeyForUseQuery(tmpKeys, userAddress.longitude.toString());
      } else if (location?.lat && location?.lng) {
        tmpKeys = createKeyForUseQuery(tmpKeys, location.lat.toString());
        tmpKeys = createKeyForUseQuery(tmpKeys, location.lng.toString());
      }
    }
    filterQuery.forEach((item) => {
      if (router.query.hasOwnProperty(item)) {
        const tmp = router.query[item];
        tmpKeys = createKeyForUseQuery(tmpKeys, tmp);
      }
    });
    return tmpKeys;
  }, [
    filterQuery,
    isStorageLoaded,
    isUserAddressStorageLoaded,
    location?.lat,
    location?.lng,
    queryKey,
    router.query,
    userAddress?.latitude,
    userAddress?.longitude,
  ]);

  const useQueryEnabled = useMemo(
    () => isStorageLoaded && isUserAddressStorageLoaded && router.isReady,
    [isStorageLoaded, isUserAddressStorageLoaded, router.isReady]
  );

  return useQuery(keys, () => getVendors({params}), {staleTime, enabled: useQueryEnabled});
}

export default useVendorListResult;
