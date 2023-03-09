import {ICartReducerCartItem, TCartReducerListItemCartOrders} from "types/interfaceCartReducer";
import {ICartDataItem, TCartData} from "types/interfaces";

type TMergeCartListToArray = (cartOrders: TCartReducerListItemCartOrders) => TCartData;
export const mergeCartListToArray: TMergeCartListToArray = (cartOrders) => {
  const tmpCount: {[x: string]: ICartDataItem} = {};
  for (const [key, value] of Object.entries(cartOrders)) {
    value.forEach((item) => {
      const tmpKey = item.extra?.reduce((arr, current) => arr + "_" + current.id, `${key}`) || key;
      let count = tmpCount[tmpKey]?.count || 0;
      tmpCount[tmpKey] = {
        id: key,
        count: count + 1,
        title: item.title,
        price: item.price,
        extra: item.extra?.map((value) => ({name: value.name, price: value.price, id: value.id})),
      };
    });
  }
  return Object.values(tmpCount);
};

type TFindOrderIndex = (props: {
  cartOrders?: TCartReducerListItemCartOrders;
  productId: number;
  order: ICartReducerCartItem;
}) => number;
export const findOrderIndex: TFindOrderIndex = ({cartOrders, productId, order}) => {
  let index = -1;
  if (cartOrders?.hasOwnProperty(productId)) {
    const orders = cartOrders[productId];
    index = orders.findIndex((item) => {
      if (order.extra?.length) {
        if (order.extra?.length === item?.extra?.length) {
          let counter = 0;
          for (const element of item.extra) {
            if (order.extra.some((el) => el.id === element.id)) {
              counter += 1;
            }
          }
          if (counter === order.extra.length) {
            return true;
          }
        }
      } else {
        return item?.extra?.length === 0;
      }
    });
  }
  return index;
};
