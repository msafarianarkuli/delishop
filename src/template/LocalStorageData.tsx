import {useEffect} from "react";
import {
  addressMapLocalStorageKey,
  setAddressMapFromStorage,
  setUserAddressFromStorage,
  userAddressLocalStorageKey,
} from "redux/addressMap/addressMapReducer";
import {useDispatch} from "react-redux";
import {useSession} from "next-auth/react";
import {CartRestaurantListLocalStorageKey, setCartRestaurantFromStorage} from "redux/cart/cartRestaurantReducer";

function LocalStorageData() {
  const dispatch = useDispatch();
  const {status} = useSession();

  useEffect(() => {
    const addressMap = localStorage.getItem(addressMapLocalStorageKey);
    const data = addressMap ? JSON.parse(addressMap) : {};
    dispatch(setAddressMapFromStorage(data));
  }, [dispatch]);

  useEffect(() => {
    const userAddress = localStorage.getItem(userAddressLocalStorageKey);
    const data = userAddress ? JSON.parse(userAddress) : null;
    if (status === "authenticated") {
      dispatch(setUserAddressFromStorage(data));
    } else if (status === "unauthenticated") {
      localStorage.removeItem(userAddressLocalStorageKey);
    }
  }, [dispatch, status]);

  useEffect(() => {
    const userAddress = localStorage.getItem(CartRestaurantListLocalStorageKey);
    const data = userAddress ? JSON.parse(userAddress) : null;
    dispatch(setCartRestaurantFromStorage(data));
  }, [dispatch]);

  return null;
}

export default LocalStorageData;
