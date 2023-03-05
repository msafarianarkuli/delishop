import {useEffect} from "react";
import {
  addressMapLocalStorageKey,
  setAddressMapFromStorage,
  setUserAddressFromStorage,
  userAddressLocalStorageKey,
} from "redux/addressMap/addressMapReducer";
import {useDispatch} from "react-redux";
import {useSession} from "next-auth/react";
import {CartLocalStorageKey, setCartFromStorage} from "redux/cart/cartReducer";

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
    const userAddress = localStorage.getItem(CartLocalStorageKey);
    const data = userAddress ? JSON.parse(userAddress) : null;
    dispatch(setCartFromStorage(data));
  }, [dispatch]);

  return null;
}

export default LocalStorageData;
