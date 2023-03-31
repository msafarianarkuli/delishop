import {axiosService} from "utils/axiosService";
import {API} from "api/const";

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
    headers: {"api-key": "service.162c51de845a4a6fa5dd73ea608664f2"},
    params,
  }).then((res) => res.data);
}
