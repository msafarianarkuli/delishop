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
import useTypeColor from "hooks/useTypeColor";
import {roundPrice} from "utils/utils";

function OrderCompleteList() {
  const router = useRouter();
  const restaurant = useCartRestaurant();
  const cartRestaurant = useSelector(selectCartRestaurant);
  const dispatch = useDispatch();
  const type = useTypeColor();

  const data = useMemo(() => {
    if (cartRestaurant.isLoadedFromStorage) {
      let cartOrders = {};
      if (restaurant?.cartOrders) {
        cartOrders = restaurant.cartOrders;
      }
      return mergeCartListToArray(cartOrders);
    }
    return [];
  }, [cartRestaurant.isLoadedFromStorage, restaurant?.cartOrders]);

  return (
    <div className="mt-headerNormal px-screenSpace">
      {data.map((item, index) => {
        return (
          <OrderCompleteCard
            key={index}
            primaryType={type}
            title={item.title}
            price={roundPrice(item.price)}
            count={item.count}
            extra={item.extra}
            onAddClick={() => {
              const id = router.query.id;
              if (id && !Array.isArray(id)) {
                if (restaurant?.cartOrders) {
                  dispatch(
                    setCartRestaurantItem({
                      vendorId: id,
                      extra: item.extra,
                      price: item.price,
                      title: item.title,
                      id: +item.id,
                      point: item.point,
                      image: item.image,
                    })
                  );
                }
              }
            }}
            onMinusClick={() => {
              const id = router.query.id;
              if (id && !Array.isArray(id)) {
                if (restaurant?.cartOrders) {
                  dispatch(
                    removeCartRestaurantCartListOrder({
                      order: item,
                      productId: +item.id,
                      vendorId: id,
                    })
                  );
                }
              }
            }}
            onClickExtra={(extraId) => {
              const id = router.query.id;
              if (id && !Array.isArray(id)) {
                if (restaurant?.cartOrders) {
                  dispatch(
                    removeCartRestaurantCartListOrderExtra({
                      extraId,
                      order: item,
                      productId: +item.id,
                      vendorId: id,
                    })
                  );
                }
              }
            }}
          />
        );
      })}
    </div>
  );
}

export default OrderCompleteList;
