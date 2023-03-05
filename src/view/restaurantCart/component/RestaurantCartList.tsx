import React, {useEffect, useState} from "react";
import RestaurantCartCard, {
  IRestaurantCartCard,
  IRestaurantCartCardDataItem,
} from "view/restaurantCart/component/restaurantCartCard/RestaurantCartCard";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {selectCartRestaurant} from "redux/cart/cartRestaurantReducer";
import {createLog} from "utils/utils";

interface IRestaurantCartList extends Omit<IRestaurantCartCard, "onClickRemove" | "onClickOk"> {
  id: string;
}

function RestaurantCartList() {
  const router = useRouter();
  const cart = useSelector(selectCartRestaurant);
  const [data, setData] = useState<IRestaurantCartList[]>([]);

  useEffect(() => {
    if (cart.isLoadedFromStorage) {
      const tmpCount: {[x: string]: IRestaurantCartCardDataItem} = {};
      for (const [key, value] of Object.entries(cart.cartItems)) {
        console.log("value", value);
        value.forEach((item) => {
          const tmpKey = item.extra?.reduce((arr, current) => arr + "_" + current.id, `${key}`) || key;
          console.log("tmpKey", tmpKey);
          let count = tmpCount[tmpKey]?.count || 0;
          tmpCount[tmpKey] = {
            count: count + 1,
            title: item.title,
            price: item.price,
            extra: item.extra?.map((item) => ({name: item.name, price: item.price})),
          };
        });
      }
      createLog("tmpCount", tmpCount);
      createLog("title", cart.title);
      const tmp: IRestaurantCartList = {
        id: cart?.vendorId || "",
        title: cart.title || "",
        data: Object.values(tmpCount),
      };
      setData([tmp]);
    }
  }, [cart.isLoadedFromStorage, cart]);

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