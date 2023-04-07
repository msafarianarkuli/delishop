import {useEffect} from "react";
import {
  addressMapLocalStorageKey,
  setAddressMapFromStorage,
  setUserAddressFromStorage,
  userAddressLocalStorageKey,
} from "redux/addressMap/addressMapReducer";
import {useDispatch} from "react-redux";
import {useSession} from "next-auth/react";
import {
  CartRestaurantListLocalStorageKey,
  setCartRestaurantFromStorage,
} from "redux/cartRestaurant/cartRestaurantReducer";
import {
  CartSupermarketListLocalStorageKey,
  setCartSupermarketFromStorage,
} from "redux/cartSupermraket/cartSupermarketReducer";

function LocalStorageData() {
  const dispatch = useDispatch();
  const {status} = useSession();

  useEffect(() => {
    const addressMap = localStorage.getItem(addressMapLocalStorageKey);
    const data = addressMap ? JSON.parse(addressMap) : {};
    if (status !== "loading") {
      dispatch(setAddressMapFromStorage(data));
    }
  }, [dispatch, status]);

  useEffect(() => {
    const userAddress = localStorage.getItem(userAddressLocalStorageKey);
    let data = null;
    if (status !== "loading") {
      if (status === "authenticated") {
        data = userAddress ? JSON.parse(userAddress) : null;
      } else {
        localStorage.removeItem(userAddressLocalStorageKey);
      }
      dispatch(setUserAddressFromStorage(data));
    }
  }, [dispatch, status]);

  useEffect(() => {
    const cartRestaurant = localStorage.getItem(CartRestaurantListLocalStorageKey);
    const data = cartRestaurant ? JSON.parse(cartRestaurant) : null;
    dispatch(setCartRestaurantFromStorage(data));
  }, [dispatch]);

  useEffect(() => {
    const cartSupermarket = localStorage.getItem(CartSupermarketListLocalStorageKey);
    const data = cartSupermarket ? JSON.parse(cartSupermarket) : null;
    dispatch(setCartSupermarketFromStorage(data));
  }, [dispatch]);

  return null;
}

export default LocalStorageData;
