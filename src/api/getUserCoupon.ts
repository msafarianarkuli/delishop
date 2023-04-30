import {IUserCouponRes, TUserCouponDataCoupons} from "types/interfaceUserCoupon";
import {axiosService} from "utils/axiosService";
import {API} from "api/const";

interface IGetUserCoupon {
  token: string;
}

type TGetUserCoupon = (props: IGetUserCoupon) => Promise<TUserCouponDataCoupons>;

const getUserCoupon: TGetUserCoupon = ({token}) => {
  return axiosService<IUserCouponRes>({url: API.GET_USER_COUPON, method: "get", token}).then(
    (res) => res.data.data.coupons
  );
};

export default getUserCoupon;
