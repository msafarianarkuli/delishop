import {IGetSupermarketDetailData, ISupermarketDetailRes} from "types/interfaceSupermarketDetail";
import {API} from "api/const";
import {axiosService} from "utils/axiosService";

interface IGetSupermarketDetailProps {
  id: string;
  isServer?: boolean;
}

type TGetSupermarketDetail = (props: IGetSupermarketDetailProps) => Promise<IGetSupermarketDetailData>;
const getSupermarketDetail: TGetSupermarketDetail = async ({isServer, id}) => {
  let url = API.GET_SUPERMARKET_MENU;
  if (isServer) {
    url = API.DOMAIN + API.GET_SUPERMARKET_MENU;
  }
  url = url.replace("{id}", id);
  return axiosService<ISupermarketDetailRes>({url, method: "get"}).then((res) => ({
    vendor: res.data.data.vendor,
    menus: res.data.data.menus,
    regions: res.data.data.regions,
  }));
};

export default getSupermarketDetail;
