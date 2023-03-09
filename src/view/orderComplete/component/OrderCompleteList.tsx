import OrderCompleteCard from "view/orderComplete/component/orderCompleteCard/OrderCompleteCard";
import useCartRestaurant from "hooks/useCartRestaurant";
import {useMemo} from "react";
import {mergeCartListToArray} from "utils/cartReducerUtils";
import {useDispatch, useSelector} from "react-redux";
import {
  removeCartRestaurantCartListOrder,
  removeCartRestaurantCartListOrderExtra,
  selectCartRestaurant,
  setCartRestaurantItem,
} from "redux/cartRestaurant/cartRestaurantReducer";
import {useRouter} from "next/router";

function OrderCompleteList() {
  const router = useRouter();
  const vendor = useCartRestaurant();
  const cart = useSelector(selectCartRestaurant);
  const dispatch = useDispatch();

  const data = useMemo(() => {
    if (cart.isLoadedFromStorage) {
      return mergeCartListToArray(vendor?.cartOrders || {});
    }
    return [];
  }, [cart.isLoadedFromStorage, vendor?.cartOrders]);

  return (
    <div className="mt-headerNormal px-screenSpace">
      {data.map((item, index) => {
        return (
          <OrderCompleteCard
            key={index}
            title={item.title}
            price={item.price}
            count={item.count}
            extra={item.extra}
            onAddClick={() => {
              const id = router.query.id;
              if (id && !Array.isArray(id)) {
                dispatch(
                  setCartRestaurantItem({
                    vendorId: id,
                    extra: item.extra,
                    price: item.price,
                    title: item.title,
                    id: +item.id,
                  })
                );
              }
            }}
            onMinusClick={() => {
              const id = router.query.id;
              if (id && !Array.isArray(id)) {
                dispatch(
                  removeCartRestaurantCartListOrder({
                    order: item,
                    productId: +item.id,
                    vendorId: id,
                  })
                );
              }
            }}
            onClickExtra={(extraId) => {
              const id = router.query.id;
              if (id && !Array.isArray(id)) {
                dispatch(
                  removeCartRestaurantCartListOrderExtra({
                    extraId,
                    order: item,
                    productId: +item.id,
                    vendorId: id,
                  })
                );
              }
            }}
          />
        );
      })}
    </div>
  );
}

export default OrderCompleteList;
