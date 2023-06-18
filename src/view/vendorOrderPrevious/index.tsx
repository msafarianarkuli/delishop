import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {useCallback} from "react";
import {IGetOrdersListResOrdersItems} from "types/interfaceOdrdersList";
// import {setCartRestaurantReorder} from "redux/cartRestaurant/cartRestaurantReducer";
import OrderPrevious from "components/orderPrevious";
import {useVendorOrderPreviousParams} from "view/vendorOrderPrevious/context/VendorOrderPreviousParamsProvider";
import {ReactQueryKey} from "utils/Const";

function VendorOrderPrevious() {
  const {vendor, id} = useVendorOrderPreviousParams();
  const dispatch = useDispatch();
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
    [dispatch, router]
  );

  return (
    <OrderPrevious
      color="default"
      activeLink={`/${vendor}/order/active`}
      previousLink={`/${vendor}/order/previous`}
      queryKey={[ReactQueryKey.VENDOR_ORDER_PREVIOUS, id.toString()]}
      categoryId={[id]}
      onClickReOrder={onClickReOrder}
    />
  );
}

export default VendorOrderPrevious;
