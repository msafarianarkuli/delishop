import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {separatePathnameAndQuerySearch} from "utils/utils";

function useQuerySearchClient() {
  const router = useRouter();
  const {querySearch} = separatePathnameAndQuerySearch(router.asPath);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (querySearch) {
      setQuery(querySearch);
    }
  }, [querySearch]);

  return query;
}

export default useQuerySearchClient;
