import {useMemo} from "react";
import usePathnameQuery from "hooks/usePathnameQuery";

export type TUseTypeColor = "default" | "supermarket" | null;

function useTypeColor() {
  const {querySearch} = usePathnameQuery();

  return useMemo(() => {
    if (querySearch?.search("supermarket") !== -1) {
      return "supermarket";
    }
    return "default";
  }, [querySearch]);
}

export default useTypeColor;
