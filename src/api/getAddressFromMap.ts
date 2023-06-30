import {axiosService} from "utils/axiosService";
import {API, NeshanApiKey} from "api/const";

interface IParams {
  lat: number;
  lng: number;
}

export interface IGetAddressFromMapRes {
  city?: string;
  county?: string;
  district?: string;
  formatted_address?: string;
  in_odd_even_zone?: boolean;
  in_traffic_zone?: boolean;
  municipality_zone?: string;
  neighbourhood?: string;
  place?: string;
  route_name?: string;
  route_type?: string;
  state?: string;
  status?: string;
  village?: string;
}

export default async function getAddressFromMap(params: IParams) {
  return axiosService<IGetAddressFromMapRes>({
    url: API.GET_ADDRESS,
    method: "get",
    headers: {"Api-Key": NeshanApiKey},
    params,
  });
}
