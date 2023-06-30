import {useMemo} from "react";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {AppHeader, AppHeaderBackBtn, AppHeaderDelete} from "components";
import useCartRestaurant from "hooks/useCartRestaurant";
import {removeCartRestaurantCartListCartOrder} from "redux/cartRestaurant/cartRestaurantReducer";
import {useVendorCartDetailParams} from "view/vendorCartDetail/context/VendorCartDetailParamsProvider";

function VendorCartDetailHeader() {
  const router = useRouter();
  const dispatch = useDispatch();
  const vendorCart = useCartRestaurant();
  const {id, vendor} = useVendorCartDetailParams();

  const body = useMemo(() => {
    let text = "سبد خرید";
    if (vendorCart?.totalOrderCount) {
      text += ` (${vendorCart?.totalOrderCount} کالا)`;
    }
    return text;
  }, [vendorCart?.totalOrderCount]);

  return (
    <div className="fixed z-10 top-0 right-0 left-0 header_background">
      <AppHeader
        left={
          <AppHeaderDelete
            onClick={() => {
              dispatch(removeCartRestaurantCartListCartOrder(id));
              router.replace(`/${vendor}/cart`);
            }}
          />
        }
        body={body}
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
      />
    </div>
  );
}

export default VendorCartDetailHeader;
