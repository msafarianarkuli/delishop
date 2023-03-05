import React, {useEffect, useState} from "react";
import RestaurantCartCard, {
  IRestaurantCartCard,
  IRestaurantCartCardDataItem,
} from "view/restaurantCart/component/restaurantCartCard/RestaurantCartCard";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {selectCartRestaurant} from "redux/cart/cartRestaurantReducer";

interface IRestaurantCartList extends Omit<IRestaurantCartCard, "onClickRemove" | "onClickOk"> {
  id: string;
}

function RestaurantCartList() {
  const router = useRouter();
  const {cartList, isLoadedFromStorage} = useSelector(selectCartRestaurant);
  const [data, setData] = useState<IRestaurantCartList[]>([]);

  useEffect(() => {
    if (isLoadedFromStorage && cartList.length) {
      const data: IRestaurantCartList[] = [];
      cartList.forEach((cart) => {
        const tmpCount: {[x: string]: IRestaurantCartCardDataItem} = {};
        for (const [key, value] of Object.entries(cart.cartOrders)) {
          value.forEach((item) => {
            const tmpKey = item.extra?.reduce((arr, current) => arr + "_" + current.id, `${key}`) || key;
            let count = tmpCount[tmpKey]?.count || 0;
            tmpCount[tmpKey] = {
              count: count + 1,
              title: item.title,
              price: item.price,
              extra: item.extra?.map((item) => ({name: item.name, price: item.price})),
            };
          });
        }
        const tmp: IRestaurantCartList = {
          id: cart?.vendorId || "",
          title: cart.title || "",
          data: Object.values(tmpCount),
        };
        data.push(tmp);
      });
      setData(data);
    }
  }, [isLoadedFromStorage, cartList]);

  return (
    <div>
      {data?.map((item, index) => {
        return (
          <RestaurantCartCard
            key={index}
            title={item.title}
            data={item.data}
            onClickOk={() => router.push(`/restaurant/${item.id}`)}
            onClickRemove={() => {}}
          />
        );
      })}
    </div>
  );
}

export default RestaurantCartList;
