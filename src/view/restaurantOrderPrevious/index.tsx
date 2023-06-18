import OrderPrevious from "components/orderPrevious";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {IGetOrdersListResOrdersItems} from "types/interfaceOdrdersList";
import {useRouter} from "next/router";
import {setCartRestaurantReorder} from "redux/cartRestaurant/cartRestaurantReducer";

export const QUERY_KEY_RESTAURANT_ORDERS_PREVIOUS = "restaurantOrdersPrevious";

function RestaurantOrderPrevious() {
  const dispatch = useDispatch();
  const router = useRouter();

  const onClickReOrder = useCallback(
    (item: IGetOrdersListResOrdersItems) => {
      dispatch(
        setCartRestaurantReorder({
          vendorId: item.vendor.id.toString(),
          title: item.vendor.name,
          point: 0,
          productKinds: item.productKinds,
        })
      );
      router.push(`/ordercomplete/${item.vendor.id}`);
    },
    [dispatch, router]
  );

  return (
    <OrderPrevious
      color="default"
      activeLink="/restaurant/order/active"
      previousLink="/restaurant/order/previous"
      queryKey={[QUERY_KEY_RESTAURANT_ORDERS_PREVIOUS]}
      categoryId={[1]}
      onClickReOrder={onClickReOrder}
    />
  );
}

export default RestaurantOrderPrevious;
