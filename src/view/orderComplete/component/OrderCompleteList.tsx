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
import useCartSupermarket from "hooks/useCartSupermarket";
import {
  removeCartSupermarketLastOrder,
  selectCartSupermarket,
  setCartSupermarketItem,
} from "redux/cartSupermraket/cartSupermarketReducer";
import useTypeColor from "hooks/useTypeColor";

function OrderCompleteList() {
  const router = useRouter();
  const restaurant = useCartRestaurant();
  const supermarket = useCartSupermarket();
  const cartRestaurant = useSelector(selectCartRestaurant);
  const cartSupermarket = useSelector(selectCartSupermarket);
  const dispatch = useDispatch();
  const type = useTypeColor();

  const data = useMemo(() => {
    if (cartRestaurant.isLoadedFromStorage && cartSupermarket.isLoadedFromStorage) {
      let cartOrders = {};
      if (restaurant?.cartOrders) {
        cartOrders = restaurant.cartOrders;
      } else if (supermarket?.cartOrders) {
        cartOrders = supermarket?.cartOrders;
      }
      return mergeCartListToArray(cartOrders);
    }
    return [];
  }, [
    cartRestaurant.isLoadedFromStorage,
    cartSupermarket.isLoadedFromStorage,
    supermarket?.cartOrders,
    restaurant?.cartOrders,
  ]);

  return (
    <div className="mt-headerNormal px-screenSpace">
      {data.map((item, index) => {
        return (
          <OrderCompleteCard
            key={index}
            primaryType={type}
            title={item.title}
            price={item.price}
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
                    })
                  );
                } else if (supermarket?.cartOrders) {
                  dispatch(
                    setCartSupermarketItem({
                      title: item.title,
                      price: item.price,
                      id: +item.id,
                      image: item.image,
                      point: item.point,
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
                } else if (supermarket?.cartOrders) {
                  dispatch(removeCartSupermarketLastOrder(+item.id));
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
