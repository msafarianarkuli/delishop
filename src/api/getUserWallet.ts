import {API} from "api/const";
import {axiosService} from "utils/axiosService";
import {IUserWalletRes} from "types/interfaceUserWallet";

type TGetUserWallet = (token: string) => Promise<number>;
const getUserWallet: TGetUserWallet = async (token) => {
  let url = API.GET_USER_WALLET;
  return axiosService<IUserWalletRes>({url, method: "get", token}).then((res) => +res.data.data.balance || 0);
};

export default getUserWallet;
