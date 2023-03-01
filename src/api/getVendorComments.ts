import {API} from "api/const";
import {axiosService} from "utils/axiosService";
import {IGetVendorCommentsListRes, TGetVendorCommentsComments} from "types/interfaceVendorComments";

interface IGetVendorCommentsProps {
  id: string;
  isServer?: boolean;
  params?: object;
}

export interface IGetVendorCommentsRes {
  comments: TGetVendorCommentsComments;
  totalCount: number;
}

type TGetVendorComments = ({isServer, id}: IGetVendorCommentsProps) => Promise<IGetVendorCommentsRes>;
const getVendorComments: TGetVendorComments = async ({isServer, id, params}) => {
  let url = API.GET_VENDOR_COMMENTS;
  if (isServer) {
    url = API.DOMAIN + API.GET_VENDOR_COMMENTS;
  }
  url = url.replace("{id}", id);
  const tmpParams = {
    skip: 0,
    take: 19,
    ...params,
  };
  return axiosService<IGetVendorCommentsListRes>({url, method: "get", params: tmpParams}).then((res) => ({
    comments: res.data.data.comments,
    totalCount: res.data.data?.totalCount,
  }));
};

export default getVendorComments;
