import {API} from "api/const";
import {axiosService} from "utils/axiosService";
import {IGetVendorDetailData, IGetVendorDetailRes} from "types/interfaceVendorDetail";
import fetchService from "utils/fetchService";

interface IGetVendorDetailProps {
  id: string;
  isServer?: boolean;
}

type TGetVendorDetail = (props: IGetVendorDetailProps) => Promise<IGetVendorDetailData>;
const getVendorDetail: TGetVendorDetail = async ({isServer, id}) => {
  let url = isServer ? API.DOMAIN + API.GET_VENDOR_DETAIL : API.GET_VENDOR_DETAIL;
  url = url.replace("{id}", id);
  if (isServer) {
    return fetchService<IGetVendorDetailRes>({
      url,
      method: "get",
    }).then((res) => ({
      vendor: res.data.vendor,
      menus: res.data.menus,
      regions: res.data.regions,
    }));
  }
  return axiosService<IGetVendorDetailRes>({url, method: "get"}).then((res) => ({
    vendor: res.data.data.vendor,
    menus: res.data.data.menus,
    regions: res.data.data.regions,
  }));
};

export default getVendorDetail;
