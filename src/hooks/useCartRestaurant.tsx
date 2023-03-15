import {useMemo} from "react";
import {useSelector} from "react-redux";
import {selectCartRestaurantList} from "redux/cartRestaurant/cartRestaurantReducer";
import {useRouter} from "next/router";
import usePathnameQuery from "hooks/usePathnameQuery";

function useCartRestaurant() {
  const cartList = useSelector(selectCartRestaurantList);
  const router = useRouter();
  const {querySearch} = usePathnameQuery();

  return useMemo(() => {
    const id = router.query.id;
    if (
      querySearch.search("supermarket") === -1 &&
      id &&
      !Array.isArray(id) &&
      cartList.some((item) => item.vendorId === id)
    ) {
      return cartList.find((item) => item.vendorId === id);
    }
    return null;
  }, [cartList, querySearch, router.query.id]);
}

export default useCartRestaurant;
