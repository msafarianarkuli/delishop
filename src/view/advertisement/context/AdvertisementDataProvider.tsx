import getAds from "api/getAds";
import {createContext, ReactNode, useContext} from "react";
import {useQuery} from "react-query";
import {TGetAdDataAds} from "types/interfaceAd";

// @ts-ignore
const initialState: any = [];

const AdvertisementDataContext = createContext(initialState);

const staleTime = 60 * 60 * 1000;

function AdvertisementDataProvider({children}: {children: ReactNode}) {
  const result = useQuery<TGetAdDataAds>([], () => getAds(), {
    staleTime,
  });
  console.log(result);
  return <AdvertisementDataContext.Provider value={result}>{children}</AdvertisementDataContext.Provider>;
}

export default AdvertisementDataProvider;

export function useAdvertisementData() {
  return useContext(AdvertisementDataContext);
}
