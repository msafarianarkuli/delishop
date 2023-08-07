import React, {createContext, useContext, useMemo} from "react";
import {IDataContextProvider} from "types/interfaces";
import getSearchAddress, {IGetSearchAddressParams, IGetSearchAddressRes} from "api/getSearchAddress";
import {useRouter} from "next/router";
import {createKeyForUseQuery} from "utils/utils";
import {useQuery} from "react-query";

const initialState: IDataContextProvider<IGetSearchAddressRes> = {
  data: undefined,
  error: null,
  isFetching: false,
  isLoading: false,
};

const AddressMapSearchDataContext = createContext<IDataContextProvider<IGetSearchAddressRes>>(initialState);

const staleTime = 10 * 60 * 1000;

export const QUERY_KEY_ADDRESS_SEARCH = "addressSearch";
export const addressMapSearchNameQuery = "name";

function AddressMapSearchDataProvider({children}: {children: JSX.Element}) {
  const router = useRouter();

  const name = useMemo(() => {
    const name = router.query[addressMapSearchNameQuery];
    if (name && !Array.isArray(name)) {
      return decodeURI(name);
    }
    return "";
  }, [router.query]);

  const params = useMemo(() => {
    let tmpParams: IGetSearchAddressParams = {
      lat: 35.73721179002162,
      lng: 51.137380487902455,
      term: "",
    };
    if (router.isReady) {
      tmpParams = {
        ...tmpParams,
        ...router.query,
      };
      if (name) {
        tmpParams.term = name;
      }
    }
    return tmpParams;
  }, [name, router.isReady, router.query]);

  const keys = useMemo(() => {
    let tmpKeys: (string | number)[] = [QUERY_KEY_ADDRESS_SEARCH];
    if (name) {
      tmpKeys = createKeyForUseQuery(tmpKeys, name);
    }
    return tmpKeys;
  }, [name]);

  const useQueryEnabled = useMemo(() => router.isReady && !!router.query.name, [router.isReady, router.query.name]);

  const result = useQuery(keys, () => getSearchAddress(params), {staleTime, enabled: useQueryEnabled});

  return <AddressMapSearchDataContext.Provider value={result}>{children}</AddressMapSearchDataContext.Provider>;
}

export default AddressMapSearchDataProvider;

export function useAddressMapSearchData() {
  return useContext(AddressMapSearchDataContext);
}
