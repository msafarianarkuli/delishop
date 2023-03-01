import {useEffect, useState} from "react";
import usePathnameQuery from "hooks/usePathnameQuery";

export type TUseTypeColor = "default" | "supermarket" | null;

function useTypeColor() {
  const {querySearch} = usePathnameQuery();
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
