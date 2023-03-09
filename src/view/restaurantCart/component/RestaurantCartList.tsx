import React, {useEffect, useState} from "react";
import RestaurantCartCard, {
  IRestaurantCartCard,
} from "view/restaurantCart/component/restaurantCartCard/RestaurantCartCard";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {removeCartRestaurantCartListCartOrder, selectCartRestaurant} from "redux/cartRestaurant/cartRestaurantReducer";
import {mergeCartListToArray} from "utils/cartReducerUtils";

interface IRestaurantCartList extends Omit<IRestaurantCartCard, "onClickRemove" | "onClickOk"> {
  id: string;
}

function RestaurantCartList() {
  const router = useRouter();
  const {cartList, isLoadedFromStorage} = useSelector(selectCartRestaurant);
  const [data, setData] = useState<IRestaurantCartList[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoadedFromStorage) {
      const data: IRestaurantCartList[] = [];
      if (cartList.length) {
        cartList.forEach((cart) => {
          const cartOrderData = mergeCartListToArray(cart.cartOrders);
          const tmp: IRestaurantCartList = {
            id: cart?.vendorId || "",
            title: cart.title || "",
            data: cartOrderData,
          };
          data.push(tmp);
        });
      }
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
            onClickRemove={() => {
              dispatch(removeCartRestaurantCartListCartOrder(item.id));
            }}
          />
        );
      })}
    </div>
  );
}

export default RestaurantCartList;
