import {IGetSupermarketDetailData, ISupermarketDetailRes} from "types/interfaceSupermarketDetail";
import {API} from "api/const";
import {axiosService} from "utils/axiosService";
import fetchService from "utils/fetchService";

interface IGetSupermarketDetailProps {
  id: string;
  isServer?: boolean;
}

export const QUERY_KEY_SUPERMARKET_DETAIL = "supermarketDetail";

type TGetSupermarketDetail = (props: IGetSupermarketDetailProps) => Promise<IGetSupermarketDetailData>;
const getSupermarketDetail: TGetSupermarketDetail = async ({isServer, id}) => {
  let url = isServer ? API.DOMAIN + API.GET_SUPERMARKET_MENU : API.GET_SUPERMARKET_MENU;
  url = url.replace("{id}", id);
  if (isServer) {
    return fetchService<ISupermarketDetailRes>({
      url,
      method: "get",
    }).then((res) => ({
      vendor: res.data.vendor,
      menus: res.data.menus,
      regions: res.data.regions,
    }));
  }
  return axiosService<ISupermarketDetailRes>({url, method: "get"}).then((res) => ({
    vendor: res.data.data.vendor,
    menus: res.data.data.menus,
    regions: res.data.data.regions,
  }));
};

export default getSupermarketDetail;
