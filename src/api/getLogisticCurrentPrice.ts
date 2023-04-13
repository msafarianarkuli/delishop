import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import fetchService from "utils/fetchService";

interface IGetLogisticCurrentPriceRes {
  price: number;
}

export const QUERY_KEY_LOGISTIC_CURRENT_PRICE = "logisticCurrentPrice";

type TGetLogisticCurrentPrice = (isServer?: boolean) => Promise<number>;
const getLogisticCurrentPrice: TGetLogisticCurrentPrice = async (isServer) => {
  const url = isServer ? API.DOMAIN + API.GET_LOGISTIC_CURRENT_PRICE : API.GET_LOGISTIC_CURRENT_PRICE;
  if (isServer) {
    return fetchService<IGetLogisticCurrentPriceRes>({
      url,
      method: "get",
    }).then((res) => res.price);
  }
  return axiosService<IGetLogisticCurrentPriceRes>({url, method: "get"}).then((res) => res.data.price);
};

export default getLogisticCurrentPrice;
