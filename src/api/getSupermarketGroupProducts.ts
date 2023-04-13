import {
  ISupermarketGroupProductsRes,
  TSupermarketGroupProductsDataProductsProducts,
} from "types/interfaceSupermarketGroupProducts";
import {API} from "api/const";
import {axiosService} from "utils/axiosService";
import fetchService from "utils/fetchService";

interface IGetSupermarketGroupProducts {
  params?: object;
  isServer?: boolean;
  vendorId: string;
  categoryId: string;
}

export interface IGetSupermarketGroupProductsRes {
  products: TSupermarketGroupProductsDataProductsProducts;
  totalCount: number;
}

type TGetSupermarketGroupProducts = (props: IGetSupermarketGroupProducts) => Promise<IGetSupermarketGroupProductsRes>;
const getSupermarketGroupProducts: TGetSupermarketGroupProducts = async ({isServer, params, vendorId, categoryId}) => {
  let url = isServer ? API.DOMAIN + API.GET_SUPERMARKET_GROUP_PRODUCTS : API.GET_SUPERMARKET_GROUP_PRODUCTS;
  const tmpParams = {
    skip: 0,
    take: 19,
    ...params,
  };
  url = url.replace("{id}", vendorId).replace("{category}", categoryId);
  if (isServer) {
    return fetchService<ISupermarketGroupProductsRes>({
      url,
      method: "get",
      params: tmpParams,
    }).then((res) => ({
      products: res.data.products.products,
      totalCount: res.data.totalCount,
    }));
  }
  return axiosService<ISupermarketGroupProductsRes>({url, method: "get", params: tmpParams}).then((res) => ({
    products: res.data.data.products.products,
    totalCount: res.data.data.totalCount,
  }));
};

export default getSupermarketGroupProducts;
