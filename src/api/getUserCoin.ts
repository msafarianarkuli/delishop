import {IUserCoinRes} from "types/interfaceUserCoin";
import {API} from "api/const";
import {axiosService} from "utils/axiosService";

type TGetUserCoin = (token: string) => Promise<number>;
const getUserCoin: TGetUserCoin = async (token) => {
  let url = API.GET_USER_COIN;
  return axiosService<IUserCoinRes>({url, method: "get", token}).then((res) => res.data.data.points);
};

export default getUserCoin;
