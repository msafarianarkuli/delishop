import React from "react";
import {AppHeader, AppHeaderBackBtn, AppHeaderDelete} from "components";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {clearCartRestaurantCartList} from "redux/cartRestaurant/cartRestaurantReducer";

function RestaurantCartHeader() {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className="fixed z-10 top-0 right-0 left-0 header_background">
      <AppHeader
        left={
          <AppHeaderDelete
            onClick={() => {
              dispatch(clearCartRestaurantCartList());
            }}
          />
        }
        body="سبد خرید"
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
      />
    </div>
  );
}

export default RestaurantCartHeader;
