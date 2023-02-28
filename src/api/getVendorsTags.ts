import {IGetVendorsTagsRes, TGetVendorsTagsData} from "types/interfaceVendorsTags";
import {axiosService} from "utils/axiosService";
import {API} from "api/const";

type TGetVendorsTags = () => Promise<TGetVendorsTagsData>;

export const VENDORS_TAGS_KEY = "vendorsTags";

const getVendorsTags: TGetVendorsTags = () => {
  const url = API.GET_VENDORS_TAGS;
  return axiosService<IGetVendorsTagsRes>({url, method: "get"}).then((res) => res.data.data);
};

export default getVendorsTags;
