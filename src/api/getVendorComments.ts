import {API} from "api/const";
import {axiosService} from "utils/axiosService";
import {IGetVendorCommentsListRes, TGetVendorCommentsComments} from "types/interfaceVendorComments";
import fetchService from "utils/fetchService";

interface IGetVendorCommentsProps {
  id: string;
  isServer?: boolean;
  params?: object;
}

export interface IGetVendorCommentsRes {
  comments: TGetVendorCommentsComments;
  totalCount: number;
}

export const QUERY_KEY_VENDORS_COMMENTS = "comments";

type TGetVendorComments = (props: IGetVendorCommentsProps) => Promise<IGetVendorCommentsRes>;
const getVendorComments: TGetVendorComments = async ({isServer, id, params}) => {
  const tmpParams = {
    skip: 0,
    take: 19,
    ...params,
  };
  let url = isServer ? API.DOMAIN + API.GET_VENDOR_COMMENTS : API.GET_VENDOR_COMMENTS;
  url = url.replace("{id}", id);
  if (isServer) {
    return fetchService<IGetVendorCommentsListRes>({
      url,
      method: "get",
      params: tmpParams,
    }).then((res) => ({
      comments: res.data.comments,
      totalCount: res.data.totalCount,
    }));
  }
  return axiosService<IGetVendorCommentsListRes>({url, method: "get", params: tmpParams}).then((res) => ({
    comments: res.data.data.comments,
    totalCount: res.data.data?.totalCount,
  }));
};

export default getVendorComments;
