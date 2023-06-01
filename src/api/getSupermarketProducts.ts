import {API} from "api/const";
import {axiosService} from "utils/axiosService";
import {ISupermarketProductsListRes, TSupermarketProductsListDataGroups} from "types/interfaceSupermarketProductsList";
import fetchService from "utils/fetchService";

interface IGetSupermarketProductsProps {
  params?: object;
  isServer?: boolean;
  vendorId: string;
  categoryId: string;
}

type TGetSupermarketProducts = (props: IGetSupermarketProductsProps) => Promise<TSupermarketProductsListDataGroups>;
const getSupermarketProducts: TGetSupermarketProducts = async ({isServer, categoryId, vendorId, params}) => {
  let url = isServer ? API.DOMAIN + API.GET_SUPERMARKET_PRODUCTS : API.GET_SUPERMARKET_PRODUCTS;
  url = url.replace("{id}", vendorId).replace("{category}", categoryId);
  if (isServer) {
    return fetchService<ISupermarketProductsListRes>({
      url,
      method: "get",
      params,
    }).then((res) => res.data.groups);
  }
  return axiosService<ISupermarketProductsListRes>({url, method: "get", params}).then((res) => res.data.data.groups);
};

export default getSupermarketProducts;
