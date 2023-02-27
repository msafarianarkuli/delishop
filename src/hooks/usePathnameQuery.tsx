import {useRouter} from "next/router";
import {separatePathnameAndQuerySearch} from "utils/utils";

function usePathnameQuery() {
  const router = useRouter();
  return separatePathnameAndQuerySearch(router.asPath);
}

export default usePathnameQuery;
