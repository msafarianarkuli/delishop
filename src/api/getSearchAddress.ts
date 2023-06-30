import {axiosService} from "utils/axiosService";
import {API, NeshanApiKey} from "api/const";

export interface IGetSearchAddressParams {
  term: string;
  lat: number;
  lng: number;
}

export interface IGetSearchAddressRes {
  count: number;
  items: IGetSearchAddressItems[];
}

interface IGetSearchAddressItems {
  title: string;
  address: string;
  neighbourhood: string;
  region: string;
  type: string;
  category: string;
  location: {
    x: number;
    y: number;
  };
}

export default async function getSearchAddress(params: IGetSearchAddressParams): Promise<IGetSearchAddressRes> {
  return axiosService<IGetSearchAddressRes>({
    url: API.GET_SEARCH_ADDRESS,
    method: "get",
    headers: {"Api-Key": NeshanApiKey},
    params,
  }).then((res) => res.data);
}
