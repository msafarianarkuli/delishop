import {IGetOrderDetailData, IGetOrderDetailRes} from "types/interfaceOrderDetail";
import {axiosService} from "utils/axiosService";
import {API} from "api/const";

interface IGetOrderDetail {
  id: string;
  token: string;
}

type TGetOrderDetail = (props: IGetOrderDetail) => Promise<IGetOrderDetailData>;

const getOrderDetail: TGetOrderDetail = ({id, token}) => {
  const url = API.GET_ORDER_DETAIL.replace("{id}", id);
  return axiosService<IGetOrderDetailRes>({
    url,
    method: "get",
    token,
  }).then((res) => res.data.data);
};

export default getOrderDetail;
