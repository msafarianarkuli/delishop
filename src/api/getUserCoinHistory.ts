import {API} from "api/const";
import {axiosService} from "utils/axiosService";
import {IUserCoinHistoryData, IUserCoinHistoryRes} from "types/interfaceUserCoinHistory";

interface IGetUserCoinHistory {
  params?: object;
  token: string;
}

export const userAwardReceivedCouponQuery = "coupon";

type TGetUserCoinHistory = ({token, params}: IGetUserCoinHistory) => Promise<IUserCoinHistoryData>;
const getUserCoinHistory: TGetUserCoinHistory = async ({token, params}) => {
  const tmpParams = {
    skip: 0,
    take: 19,
    ...params,
  };
  let url = API.GET_USER_COIN_HISTORY;
  return axiosService<IUserCoinHistoryRes>({url, method: "get", token, params: tmpParams}).then((res) => ({
    points_history: res.data.data.points_history,
    totalCount: res.data.data.totalCount,
  }));
};

export default getUserCoinHistory;
