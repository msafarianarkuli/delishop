import {API} from "api/const";
import {axiosService} from "utils/axiosService";
import {IGetVendorDetailData, IGetVendorDetailRes} from "types/interfaceVendorDetail";

interface IGetVendorDetailProps {
  id: string;
  isServer?: boolean;
}

type TGetVendorDetail = ({isServer, id}: IGetVendorDetailProps) => Promise<IGetVendorDetailData>;
const getVendorDetail: TGetVendorDetail = async ({isServer, id}) => {
  let url = API.GET_VENDORS_DETAIL;
  if (isServer) {
    url = API.DOMAIN + API.GET_VENDORS_DETAIL;
  }
  url = url.replace("{id}", id);
  return axiosService<IGetVendorDetailRes>({url, method: "get"}).then((res) => ({
    vendor: res.data.data.vendor,
    menus: res.data.data.menus,
    regions: res.data.data.regions,
  }));
};

export default getVendorDetail;
