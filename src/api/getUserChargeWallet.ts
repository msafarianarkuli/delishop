import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import {IUserChargeWalletRes} from "types/interfaceUserChargeWallet";

interface IGetUserChargeWallet {
  token: string;
  price: string;
}

type TGetUserChargeWallet = (props: IGetUserChargeWallet) => Promise<IUserChargeWalletRes>;

const getUserChargeWallet: TGetUserChargeWallet = ({price, token}) => {
  const url = API.USER_WALLET_CHARGE.replace("{price}", price);
  return axiosService<IUserChargeWalletRes>({url, method: "get", token}).then((res) => res.data);
};

export default getUserChargeWallet;
