import React, {createContext, useContext} from "react";
import {TGetBannerDataBanners} from "types/interfaceBanner";
import {useQuery, UseQueryResult} from "react-query";
import getBanners, {QUERY_KEY_HOME_BANNERS} from "api/getBanners";

// @ts-ignore
const initialState: UseQueryResult<TGetBannerDataBanners> = {};

const HomeBannersContext = createContext<UseQueryResult<TGetBannerDataBanners>>(initialState);

const staleTime = 10 * 60 * 1000;

function HomeBannersDataProvider({children}: {children: JSX.Element}) {
  const result = useQuery(QUERY_KEY_HOME_BANNERS, () => getBanners(), {
    staleTime,
  });

  return <HomeBannersContext.Provider value={result}>{children}</HomeBannersContext.Provider>;
}

export default HomeBannersDataProvider;

export function useHomeBannersData() {
  return useContext(HomeBannersContext);
}
