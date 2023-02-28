import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import {IGetVendorsListRes, TGetVendorsListResVendors} from "types/interfaceVendorsList";

interface IGetRestaurantsProps {
  params?: object;
  isServer?: boolean;
}

export interface IGetRestaurantsRes {
  vendors: TGetVendorsListResVendors;
  total: number;
}

type TGetRestaurants = ({isServer, params}: IGetRestaurantsProps) => Promise<IGetRestaurantsRes>;
const getRestaurants: TGetRestaurants = async ({isServer, params}) => {
  let url = API.GET_VENDORS_LIST;
  if (isServer) {
    url = API.DOMAIN + API.GET_VENDORS_LIST;
  }
  const tmpParams = {
    "category[]": 1,
    skip: 0,
    take: 19,
    ...params,
  };
  return axiosService<IGetVendorsListRes>({url, method: "get", params: tmpParams}).then((res) => ({
    vendors: res.data.data.vendors,
    total: res.data.totalCount,
  }));
};

export default getRestaurants;
