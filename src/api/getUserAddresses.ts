import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import {IGetUserAddressesListRes, TGetUserAddressesListAddresses} from "types/interfaceUserAddress";

export const QUERY_KEY_USER_ADDRESSES = "userAddresses";

type TGetVendorsTags = (token: string) => Promise<TGetUserAddressesListAddresses>;

const getUserAddresses: TGetVendorsTags = async (token) => {
  const url = API.GET_USER_ADDRESSES;
  return axiosService<IGetUserAddressesListRes>({url, method: "get", token}).then((res) => res.data.data.addresses);
};

export default getUserAddresses;
