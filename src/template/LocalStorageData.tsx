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
    let data = null;
    if (status === "authenticated") {
      data = userAddress ? JSON.parse(userAddress) : null;
    } else if (status === "unauthenticated") {
      localStorage.removeItem(userAddressLocalStorageKey);
    }
    dispatch(setUserAddressFromStorage(data));
  }, [dispatch, status]);

  useEffect(() => {
    const userAddress = localStorage.getItem(CartRestaurantListLocalStorageKey);
    const data = userAddress ? JSON.parse(userAddress) : null;
    dispatch(setCartRestaurantFromStorage(data));
  }, [dispatch]);

  return null;
}

export default LocalStorageData;
