import {axiosService} from "utils/axiosService";
import {paginationCalc} from "utils/utils";
import {API} from "api/const";
import {IGetUserDiscountRes, IUserDiscountData} from "types/interfaceUserDiscount";

interface IGetUserDiscount {
  pageParam?: number;
  count?: number;
  token: string;
}

type TGetUserDiscount = (props: IGetUserDiscount) => Promise<IUserDiscountData>;

const getUserDiscount: TGetUserDiscount = ({pageParam = 1, count = 20, token}) => {
  const {take, skip} = paginationCalc({page: pageParam, count});
  const params = {
    skip,
    take,
  };
  const url = API.GET_USER_DISCOUNT;
  return axiosService<IGetUserDiscountRes>({url, method: "get", params, token}).then((res) => res.data.data);
};

export default getUserDiscount;
