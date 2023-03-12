import {API} from "api/const";
import {axiosService} from "utils/axiosService";
import {
  ISupermarketProductsListDataProductsProducts,
  ISupermarketProductsListRes,
} from "types/interfaceSupermarketProductsList";

interface IGetSupermarketProductsProps {
  params?: object;
  isServer?: boolean;
}

export interface IGetSupermarketProductsRes {
  products: ISupermarketProductsListDataProductsProducts;
  total: number;
}

type TGetSupermarketProducts = (props: IGetSupermarketProductsProps) => Promise<IGetSupermarketProductsRes>;
const getSupermarketProducts: TGetSupermarketProducts = async ({isServer, params}) => {
  let url = API.GET_VENDORS_LIST;
  if (isServer) {
    url = API.DOMAIN + API.GET_VENDORS_LIST;
  }
  const tmpParams = {
    skip: 0,
    take: 19,
    ...params,
  };
  return axiosService<ISupermarketProductsListRes>({url, method: "get", params: tmpParams}).then((res) => ({
    products: res.data.data.products.products,
    total: res.data.data.totalCount,
  }));
};

export default getSupermarketProducts;
