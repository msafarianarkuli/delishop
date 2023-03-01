import {useRouter} from "next/router";
import {separatePathnameAndQuerySearch} from "utils/utils";
import {useMemo} from "react";

function usePathnameQuery() {
  const router = useRouter();
  return useMemo(() => separatePathnameAndQuerySearch(router.asPath), [router.asPath]);
}

export default usePathnameQuery;
