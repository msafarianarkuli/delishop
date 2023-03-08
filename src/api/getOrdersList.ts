import {API} from "api/const";
import {axiosService} from "utils/axiosService";
import {IGetOrdersListRes, IGetOrdersListResOrders} from "types/interfaceOdrdersList";

interface IGetOrdersListProps {
  params?: object;
  token: string;
}

export interface IGetOrdersRes {
  orders: IGetOrdersListResOrders;
  total: number;
}

type TGetOrdersList = (props: IGetOrdersListProps) => Promise<IGetOrdersRes>;
const getOrdersList: TGetOrdersList = async ({params, token}) => {
  const url = API.GET_ORDERS_LIST;
  const tmpParams = {
    skip: 0,
    take: 19,
    ...params,
  };
  return axiosService<IGetOrdersListRes>({url, method: "get", params: tmpParams, token}).then((res) => ({
    orders: res.data.data.orders,
    total: res.data.totalCount,
  }));
};

export default getOrdersList;
