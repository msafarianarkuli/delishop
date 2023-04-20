import {API} from "api/const";
import {axiosService} from "utils/axiosService";
import {IUserCoinHistoryData, IUserCoinHistoryRes} from "types/interfaceUserCoinHistory";
import {paginationCalc} from "utils/utils";

interface IGetUserCoinHistory {
  params?: object;
  pageParam?: number;
  count?: number;
  token: string;
}

export const userAwardReceivedCouponQuery = "coupon";

type TGetUserCoinHistory = ({token, params}: IGetUserCoinHistory) => Promise<IUserCoinHistoryData>;
const getUserCoinHistory: TGetUserCoinHistory = async (props) => {
  const {token, params, pageParam = 1, count = 20} = props;
  const {take, skip} = paginationCalc({page: pageParam, count});
  const tmpParams = {
    skip,
    take,
    ...params,
  };
  let url = API.GET_USER_COIN_HISTORY;
  return axiosService<IUserCoinHistoryRes>({url, method: "get", token, params: tmpParams}).then((res) => ({
    points_history: res.data.data.points_history,
    totalCount: res.data.data.totalCount,
  }));
};

export default getUserCoinHistory;
