import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {separatePathnameAndQuerySearch} from "utils/utils";
import superMarketPin from "assets/images/superMarketPin.svg";

function useMapPin() {
  const router = useRouter();
  const {querySearch} = separatePathnameAndQuerySearch(router.asPath);
  const [pin, setPin] = useState<string[]>([]);

  useEffect(() => {
    if (querySearch.search("supermarket") !== -1) {
      setPin([superMarketPin.src]);
    }
  }, [querySearch]);

  return pin;
}

export default useMapPin;
