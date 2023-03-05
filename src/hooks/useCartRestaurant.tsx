import {useMemo} from "react";
import {useSelector} from "react-redux";
import {selectCartRestaurantList} from "redux/cart/cartRestaurantReducer";
import {useRouter} from "next/router";

function useCartRestaurant() {
  const cartList = useSelector(selectCartRestaurantList);
  const router = useRouter();

  return useMemo(() => {
    const id = router.query.id;
    if (id && !Array.isArray(id) && cartList.some((item) => item.vendorId === id)) {
      return cartList.find((item) => item.vendorId === id);
    }
    return null;
  }, [cartList, router.query.id]);
}

export default useCartRestaurant;
