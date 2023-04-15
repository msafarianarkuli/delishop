import {API} from "api/const";
import fetchService from "utils/fetchService";
import {axiosService} from "utils/axiosService";
import {IGetAdRes, TGetAdDataAds} from "types/interfaceAd";

type TGetAds = (isServer?: boolean) => Promise<TGetAdDataAds>;

export const QUERY_KEY_HOME_ADS = "homeAds";

const getAds: TGetAds = (isServer) => {
  const url = isServer ? API.DOMAIN + API.GET_ADS : API.GET_ADS;
  if (isServer) {
    return fetchService<IGetAdRes>({
      url,
      method: "get",
    }).then((res) => res.data.ads);
  }
  return axiosService<IGetAdRes>({url, method: "get"}).then((res) => res.data.data.ads);
};

export default getAds;
