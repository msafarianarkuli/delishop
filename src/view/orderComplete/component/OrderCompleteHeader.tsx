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
import useCartSupermarket from "hooks/useCartSupermarket";
import {clearCartSupermarket} from "redux/cartSupermraket/cartSupermarketReducer";

function OrderCompleteHeader() {
  const router = useRouter();
  const restaurant = useCartRestaurant();
  const supermarket = useCartSupermarket();
  const dispatch = useDispatch();
  const {step} = useOrderComplete();
  const dispatchOrderComplete = useOrderCompleteAction();
  return (
    <div className="fixed z-[10000] top-0 right-0 left-0 header_background">
      <AppHeader
        left={
          <AppHeaderDelete
            onClick={() => {
              const id = router.query.id;
              if (id && !Array.isArray(id)) {
                if (restaurant?.cartOrders) {
                  dispatch(removeCartRestaurantCartListCartOrder(id));
                  router.replace("/restaurant/cart");
                } else if (supermarket?.cartOrders) {
                  dispatch(clearCartSupermarket());
                  router.replace("/supermarket");
                }
              }
            }}
          />
        }
        body="تکمیل خرید"
        right={
          <AppHeaderBackBtn
            onClick={() => {
              if (step === 1) {
                router.back();
              } else {
                dispatchOrderComplete(setOrderCompleteStep(1));
              }
            }}
          />
        }
      />
    </div>
  );
}

export default OrderCompleteHeader;
