import {axiosService} from "utils/axiosService";
import {API} from "api/const";

interface ISendCodeRes {
  data: {
    phone: string;
  };
  isnew: boolean;
}

interface IBody {
  phone: string;
}

export default async function sendCode(body: IBody) {
  return axiosService<ISendCodeRes, IBody>({url: API.SEND_CODE, method: "post", body});
}
