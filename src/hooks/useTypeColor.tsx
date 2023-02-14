import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {separatePathnameAndQuerySearch} from "utils/utils";

export type TUseTypeColor = "default" | "supermarket" | null;

function useTypeColor() {
  const router = useRouter();
  const {querySearch} = separatePathnameAndQuerySearch(router.asPath);
  const [type, setType] = useState<TUseTypeColor>(null);

  useEffect(() => {
    if (querySearch?.search("supermarket") !== -1) {
      setType("supermarket");
    } else {
      setType("default");
    }
  }, [querySearch]);

  return type;
}

export default useTypeColor;
