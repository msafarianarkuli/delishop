import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import {IGetVendorsListRes, TGetVendorsListResVendors} from "types/interfaceVendorsList";

interface IGetVendorsProps {
  params?: object;
  isServer?: boolean;
}

export interface IGetVendorsRes {
  vendors: TGetVendorsListResVendors;
  total: number;
}

type TGetRestaurants = (props: IGetVendorsProps) => Promise<IGetVendorsRes>;
const getVendors: TGetRestaurants = async ({isServer, params}) => {
  let url = API.GET_VENDORS_LIST;
  if (isServer) {
    url = API.DOMAIN + API.GET_VENDORS_LIST;
  }
  const tmpParams = {
    skip: 0,
    take: 19,
    ...params,
  };
  return axiosService<IGetVendorsListRes>({url, method: "get", params: tmpParams}).then((res) => ({
    vendors: res.data.data.vendors,
    total: res.data.totalCount,
  }));
};

export default getVendors;
