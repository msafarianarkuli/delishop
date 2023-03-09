import React, {MouseEventHandler} from "react";
import {AppHeader, AppHeaderBackBtn, AppHeaderDelete} from "components";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {removeCartRestaurantCartListCartOrder} from "redux/cartRestaurant/cartRestaurantReducer";

function OrderCompleteHeader({onClick}: {onClick: MouseEventHandler}) {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className="fixed z-[10000] top-0 right-0 left-0 header_background">
      <AppHeader
        left={
          <AppHeaderDelete
            onClick={() => {
              const id = router.query.id;
              if (id && !Array.isArray(id)) {
                dispatch(removeCartRestaurantCartListCartOrder(id));
                router.replace("/restaurant/cart");
              }
            }}
          />
        }
        body="تکمیل خرید"
        right={<AppHeaderBackBtn onClick={onClick} />}
      />
    </div>
  );
}

export default OrderCompleteHeader;
