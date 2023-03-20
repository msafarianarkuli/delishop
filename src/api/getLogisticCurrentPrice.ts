import {axiosService} from "utils/axiosService";
import {API} from "api/const";

interface IGetLogisticCurrentPriceRes {
  price: number;
}

export const QUERY_KEY_LOGISTIC_CURRENT_PRICE = "logisticCurrentPrice";

type TGetLogisticCurrentPrice = (isServer?: boolean) => Promise<number>;
const getLogisticCurrentPrice: TGetLogisticCurrentPrice = async (isServer) => {
  let url = API.GET_LOGISTIC_CURRENT_PRICE;
  if (isServer) {
    url = API.DOMAIN + API.GET_LOGISTIC_CURRENT_PRICE;
  }
  return axiosService<IGetLogisticCurrentPriceRes>({url, method: "get"}).then((res) => res.data.price);
};

export default getLogisticCurrentPrice;
