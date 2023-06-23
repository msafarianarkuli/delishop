import {AppHeader, AppHeaderBackBtn, AppHeaderDelete} from "components";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {removeCartRestaurantCartListCartOrder} from "redux/cartRestaurant/cartRestaurantReducer";
import {
  setOrderCompleteStep,
  useOrderComplete,
  useOrderCompleteAction,
} from "view/orderComplete/context/OrderCompleteProvider";
import useCartRestaurant from "hooks/useCartRestaurant";
import {useOrderCompleteParams} from "view/orderComplete/context/OrderCompleteParamsProvider";
import {useCallback} from "react";

function OrderCompleteHeader() {
  const router = useRouter();
  const restaurant = useCartRestaurant();
  const dispatch = useDispatch();
  const {step} = useOrderComplete();
  const dispatchOrderComplete = useOrderCompleteAction();
  const {vendor} = useOrderCompleteParams();

  const onClickDelete = useCallback(() => {
    const id = router.query.id;
    if (id && !Array.isArray(id)) {
      if (restaurant?.cartOrders) {
        dispatch(removeCartRestaurantCartListCartOrder(id));
        router.replace(`/${vendor}/cart`);
      }
    }
  }, [dispatch, restaurant?.cartOrders, router, vendor]);

  const onClickBack = useCallback(() => {
    if (step === 1) {
      router.back();
    } else {
      dispatchOrderComplete(setOrderCompleteStep(1));
    }
  }, [dispatchOrderComplete, router, step]);

  return (
    <div className="fixed z-[10000] top-0 right-0 left-0 header_background">
      <AppHeader
        left={<AppHeaderDelete onClick={onClickDelete} />}
        body="تکمیل خرید"
        right={<AppHeaderBackBtn onClick={onClickBack} />}
      />
    </div>
  );
}

export default OrderCompleteHeader;
