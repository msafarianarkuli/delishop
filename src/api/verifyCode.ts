import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import fetchService from "utils/fetchService";

interface IVerifyCode {
  isServer?: boolean;
  body: {
    phone: string;
    code: string;
  };
}

interface IVerifyCodeRes {
  user: {
    id: number;
    name: string | null;
    phone: string;
    email: string;
    role: [
      {
        id: number;
        name: string;
      }
    ];
    birthday: string | null;
    invite_token: string | null;
    age_level: string | null;
    gender: string | null;
    anniversary_date: string | null;
  };
  auth: {
    token: string;
    expires_at: string;
  };
}

type TVerifyCode = (props: IVerifyCode) => Promise<IVerifyCodeRes>;

const verifyCode: TVerifyCode = ({isServer, body}) => {
  let url = API.VERIFY_CODE;
  if (isServer) {
    url = API.DOMAIN + API.VERIFY_CODE;
    return fetchService({
      url,
      method: "post",
      body: JSON.stringify(body),
    });
  }
  return axiosService<IVerifyCodeRes>({url, method: "post", body}).then((res) => res.data);
};

export default verifyCode;
