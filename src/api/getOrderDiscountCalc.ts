import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import {IOrderDiscountCalcRes} from "types/interfaceOrderDiscountCalc";

interface IGetOrderDiscountCalc {
  code: string;
  vendorId: string;
  price: number;
  token: string;
}

type TGetOrderDiscountCalc = (props: IGetOrderDiscountCalc) => Promise<number>;

const getOrderDiscountCalc: TGetOrderDiscountCalc = (props) => {
  const {code, price, vendorId, token} = props;
  return axiosService<IOrderDiscountCalcRes>({
    url: API.GET_ORDER_DISCOUNT_CALC,
    token,
    method: "get",
    params: {
      code,
      vendor_id: vendorId,
      amount: price,
    },
  }).then((res) => res.data.data.discountPrice);
};

export default getOrderDiscountCalc;
