import React, {useMemo} from "react";
import usePathnameQuery from "hooks/usePathnameQuery";
import {useRouter} from "next/router";
import {
  addressMapSearchNameQuery,
  useAddressMapSearchData,
} from "view/addressMapSearch/context/AddressMapSearchDataProvider";

function AddressMapSearchNotfound() {
  const {data, isLoading, isFetching} = useAddressMapSearchData();
  const {querySearch} = usePathnameQuery();
  const query = useMemo(() => new URLSearchParams(querySearch), [querySearch]);
  const router = useRouter();

  if (router.isReady) {
    if (!data?.items.length && !isLoading && !isFetching) {
      if (query.has(addressMapSearchNameQuery)) {
        return <div className="mt-5">موردی یافت نشد</div>;
      }
      return <div className="mt-5">محل مورد نظر خود را جستجو کنید</div>;
    }
  }
  return null;
}

export default AddressMapSearchNotfound;
