import {useQuery, UseQueryResult} from "react-query";
import {createContext, useContext} from "react";
import {TGetAdDataAds} from "types/interfaceAd";
import getAds, {QUERY_KEY_HOME_ADS} from "api/getAds";

// @ts-ignore
const initialState: UseQueryResult<TGetAdDataAds> = {};

const HomeAdsContext = createContext<UseQueryResult<TGetAdDataAds>>(initialState);

const staleTime = 10 * 60 * 1000;

function HomeAdsDataProvider({children}: {children: JSX.Element}) {
  const result = useQuery(QUERY_KEY_HOME_ADS, () => getAds(), {
    staleTime,
  });

  return <HomeAdsContext.Provider value={result}>{children}</HomeAdsContext.Provider>;
}

export default HomeAdsDataProvider;

export function useHomeAdsData() {
  return useContext(HomeAdsContext);
}
