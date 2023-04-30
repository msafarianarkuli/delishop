import {AxiosPromise} from "axios";
import {axiosService} from "utils/axiosService";
import {API} from "api/const";

interface IGetCoupon {
  id: number;
  token: string;
}

type TGetCoupon = (props: IGetCoupon) => AxiosPromise;

const getCoupon: TGetCoupon = ({token, id}) => {
  return axiosService({
    url: API.GET_COUPON,
    method: "post",
    token,
    body: {
      type_id: id,
    },
  });
};

export default getCoupon;
