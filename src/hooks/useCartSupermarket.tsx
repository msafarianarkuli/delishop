import {useMemo} from "react";
import {useSelector} from "react-redux";
import {selectCartSupermarketCart} from "redux/cartSupermraket/cartSupermarketReducer";
import usePathnameQuery from "hooks/usePathnameQuery";

function useCartSupermarket() {
  const cart = useSelector(selectCartSupermarketCart);
  const {querySearch} = usePathnameQuery();

  return useMemo(() => {
    if (querySearch.search("supermarket") !== -1) {
      return cart;
    }
    return null;
  }, [cart, querySearch]);
}

export default useCartSupermarket;
