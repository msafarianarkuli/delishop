import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import fetchService from "utils/fetchService";
import {IGetLogisticAllPriceRes} from "types/interfaceLogistic";

export const QUERY_KEY_LOGISTIC_ALL_PRICE = "logisticAllPrice";

type TGetLogisticAllPrice = (isServer?: boolean) => Promise<{}>;
const getLogisticAllPrice: TGetLogisticAllPrice = async (isServer) => {
  const url = isServer ? API.DOMAIN + API.GET_LOGISTIC_ALL_PRICE : API.GET_LOGISTIC_ALL_PRICE;
  if (isServer) {
    return fetchService<IGetLogisticAllPriceRes[]>({
      url,
      method: "get",
    }).then((res) => res);
  }
  return axiosService<IGetLogisticAllPriceRes[]>({url, method: "get"}).then((res) => res.data);
};

export default getLogisticAllPrice;
