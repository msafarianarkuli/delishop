import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {useCallback} from "react";
import {IGetOrdersListResOrdersItems} from "types/interfaceOdrdersList";
import {setCartRestaurantReorder} from "redux/cartRestaurant/cartRestaurantReducer";
import OrderPrevious from "components/orderPrevious";
import {useVendorOrderPreviousParams} from "view/vendorOrderPrevious/context/VendorOrderPreviousParamsProvider";
import {ReactQueryKey} from "utils/Const";

function VendorOrderPrevious() {
  const {vendor} = useVendorOrderPreviousParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const onClickReOrder = useCallback(
    (item: IGetOrdersListResOrdersItems) => {
      dispatch(
        setCartRestaurantReorder({
          vendorAddressName: vendor,
          vendorId: item.vendor.id.toString(),
          title: item.vendor.name,
          point: 0,
          productKinds: item.productKinds,
        })
      );
      router.push(`${vendor}/ordercomplete/${item.vendor.id}`);
    },
    [dispatch, router, vendor]
  );

  return (
    <OrderPrevious
      color="default"
      activeLink={`/${vendor}/order/active`}
      previousLink={`/${vendor}/order/previous`}
      queryKey={[ReactQueryKey.VENDOR_ORDER_PREVIOUS]}
      categoryId={[]}
      onClickReOrder={onClickReOrder}
    />
  );
}

export default VendorOrderPrevious;
