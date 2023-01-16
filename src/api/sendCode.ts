import {axiosService} from "utils/axiosService";
import {API} from "api/const";

interface ISendCodeRes {
  data: {
    phone: string;
  };
  isnew: boolean;
}

export default async function sendCode<B>(body: B) {
  return axiosService<ISendCodeRes, B>({url: API.SEND_CODE, method: "post", body});
}
