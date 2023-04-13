import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import {IGetVendorsListRes, TGetVendorsListResVendors} from "types/interfaceVendorsList";
import {paginationCalc} from "utils/utils";
import fetchService from "utils/fetchService";

interface IGetVendorsProps {
  pageParam?: number;
  count?: number;
  params?: object;
  isServer?: boolean;
}

export interface IGetVendorsRes {
  vendors: TGetVendorsListResVendors;
  total: number;
}

type TGetRestaurants = (props: IGetVendorsProps) => Promise<IGetVendorsRes>;
const getVendors: TGetRestaurants = async (props) => {
  const {isServer, params, pageParam = 1, count = 20} = props;
  const url = isServer ? API.DOMAIN + API.GET_VENDORS_LIST : API.GET_VENDORS_LIST;
  const {take, skip} = paginationCalc({page: pageParam, count});
  const tmpParams = {
    skip,
    take,
    ...params,
  };
  if (isServer) {
    return fetchService({
      url,
      method: "get",
      params: tmpParams,
    });
  }
  return axiosService<IGetVendorsListRes>({url, method: "get", params: tmpParams}).then((res) => ({
    vendors: res.data.data.vendors,
    total: res.data.totalCount,
  }));
};

export default getVendors;
