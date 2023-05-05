import {useRouter} from "next/router";
import {useCallback} from "react";
import {IGetOrdersListResOrdersItems} from "types/interfaceOdrdersList";
import OrderPrevious from "components/orderPrevious";

export const QUERY_KEY_SUPERMARKET_ORDERS_PREVIOUS = "supermarketOrdersPrevious";

function SupermarketOrderPrevious() {
  // const dispatch = useDispatch();
  const router = useRouter();

  const onClickReOrder = useCallback(
    (item: IGetOrdersListResOrdersItems) => {
      // dispatch(
      //   setCartRestaurantReorder({
      //     vendorId: item.vendor.id.toString(),
      //     title: item.vendor.name,
      //     point: 0,
      //     productKinds: item.productKinds,
      //   })
      // );
      router.push(`/ordercomplete/${item.vendor.id}`);
    },
    [router]
  );

  return (
    <OrderPrevious
      color="supermarket"
      activeLink="/supermarket/order/active"
      previousLink="/supermarket/order/previous"
      queryKey={QUERY_KEY_SUPERMARKET_ORDERS_PREVIOUS}
      categoryId={[2]}
      onClickReOrder={onClickReOrder}
    />
  );
}

export default SupermarketOrderPrevious;
