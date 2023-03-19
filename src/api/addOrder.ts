import {IAddOrderData, IAddOrderRes} from "types/interfaceAddOrder";
import {axiosService} from "utils/axiosService";
import {API} from "api/const";

interface IBody extends IAddOrderBody {
  ordertype_enum: number;
  delivery_type: number;
}

export interface IAddOrderBody {
  location_place_fid: number;
  sendtime: number;
  paymenttype: number;
  productkinds: IAddOrderBodyProductKinds;
  vendor_id: number;
  description: string;
}

export interface IAddOrderBodyProductKinds {
  [x: string]: {count: number; extra?: number[]};
}

type TAddOrder = (props: {body: IAddOrderBody; token: string}) => Promise<IAddOrderData>;
const addOrder: TAddOrder = async ({body, token}) => {
  const tmpBody: IBody = {
    ...body,
    ordertype_enum: 1,
    delivery_type: 1,
  };
  const url = API.ADD_ORDER;
  return axiosService<IAddOrderRes>({url, method: "post", token, body: tmpBody}).then((res) => res.data.Data);
};

export default addOrder;
