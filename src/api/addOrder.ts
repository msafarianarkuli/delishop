import {IAddOrderRes} from "types/interfaceAddOrder";
import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import {AxiosPromise} from "axios";

// interface IBody extends IAddOrderBody {
//   ordertype_enum: number;
//   delivery_type: number;
// }
//
// export interface IAddOrderBody {
//   location_place_fid: number;
//   sendtime: string;
//   paymenttype: number;
//   productkinds: IAddOrderBodyProductKinds;
//   vendor_id: number;
//   description: string;
// }

export interface IAddOrderBodyProductKinds {
  [x: string]: {count: number; extra?: number[]};
}

type TAddOrder = (props: {body: FormData; token: string}) => AxiosPromise<IAddOrderRes>;
const addOrder: TAddOrder = async ({body, token}) => {
  body.append("ordertype_enum", "1");
  body.append("delivery_type", "1");
  // const tmpBody: IBody = {
  //   ...body,
  //   ordertype_enum: 1,
  //   delivery_type: 1,
  // };
  const url = API.ADD_ORDER;
  return axiosService<IAddOrderRes>({url, method: "post", token, body, isFormData: true});
};

export default addOrder;
