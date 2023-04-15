import {IGetBannerDataBanners, IGetBannerRes} from "types/interfaceBanner";
import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import fetchService from "utils/fetchService";

type TGetBanners = (isServer?: boolean) => Promise<IGetBannerDataBanners>;

export const QUERY_KEY_HOME_BANNERS = "homeBanners";

const getBanners: TGetBanners = (isServer) => {
  const url = isServer ? API.DOMAIN + API.GET_BANNERS : API.GET_BANNERS;
  if (isServer) {
    return fetchService<IGetBannerRes>({
      url,
      method: "get",
    }).then((res) => res.data.banners);
  }
  return axiosService<IGetBannerRes>({url, method: "get"}).then((res) => res.data.data.banners);
};

export default getBanners;
