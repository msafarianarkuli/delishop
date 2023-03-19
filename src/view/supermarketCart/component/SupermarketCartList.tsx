import React, {useEffect, useState} from "react";
import SupermarketCartCard from "view/supermarketCart/component/supermarketCartCard";
import {useDispatch, useSelector} from "react-redux";
import {
  removeCartSupermarketLastOrder,
  selectCartSupermarket,
  setCartSupermarketItem,
} from "redux/cartSupermraket/cartSupermarketReducer";
import {mergeCartListToArray} from "utils/cartReducerUtils";
import {TCartData} from "types/interfaces";

function SupermarketCartList() {
  const {cart, isLoadedFromStorage} = useSelector(selectCartSupermarket);
  const dispatch = useDispatch();
  const [data, setData] = useState<TCartData>([]);

  useEffect(() => {
    if (isLoadedFromStorage) {
      let data: TCartData = [];
      if (cart.cartOrders && Object.keys(cart.cartOrders).length) {
        data = mergeCartListToArray(cart.cartOrders);
      }
      setData(data);
    }
  }, [cart.cartOrders, isLoadedFromStorage]);

  if (!data.length) return <div>سبد خرید خالی می باشد</div>;
  return (
    <div>
      {data.map((item, index) => {
        return (
          <SupermarketCartCard
            key={index}
            title={item.title}
            image={item.image}
            count={item.count}
            price={item.price}
            onAddClick={() => {
              dispatch(
                setCartSupermarketItem({
                  title: item.title,
                  price: item.price,
                  id: +item.id,
                  image: item.image,
                  point: item.point,
                })
              );
            }}
            onMinusClick={() => {
              dispatch(removeCartSupermarketLastOrder(+item.id));
            }}
          />
        );
      })}
    </div>
  );
}

export default SupermarketCartList;
