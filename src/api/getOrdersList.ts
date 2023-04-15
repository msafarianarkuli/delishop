import {API} from "api/const";
import {axiosService} from "utils/axiosService";
import {IGetOrdersListRes, IGetOrdersListResOrders} from "types/interfaceOdrdersList";
import {paginationCalc} from "utils/utils";

interface IGetOrdersListProps {
  token: string;
  params?: object;
  pageParam?: number;
  count?: number;
  query?: string;
}

export interface IGetOrdersRes {
  orders: IGetOrdersListResOrders;
  total: number;
}

type TGetOrdersList = (props: IGetOrdersListProps) => Promise<IGetOrdersRes>;
const getOrdersList: TGetOrdersList = async (props) => {
  const {params, token, pageParam, count = 20, query} = props;
  let url = API.GET_ORDERS_LIST;
  if (query) {
    url += query;
  }
  const {take, skip} = paginationCalc({page: pageParam, count});
  const tmpParams = {
    skip,
    take,
    ...params,
  };
  return axiosService<IGetOrdersListRes>({url, method: "get", params: tmpParams, token}).then((res) => ({
    orders: res.data.data.orders,
    total: res.data.totalCount,
  }));
};

export default getOrdersList;
