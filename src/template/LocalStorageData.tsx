import {useEffect} from "react";
import {addressMapLocalStorageKey, setAddressMapFromStorage} from "redux/addressMap/addressMapReducer";
import {useDispatch} from "react-redux";

function LocalStorageData() {
  const dispatch = useDispatch();
  useEffect(() => {
    const addressMap = localStorage.getItem(addressMapLocalStorageKey);
    const data = addressMap ? JSON.parse(addressMap) : {};
    dispatch(setAddressMapFromStorage(data));
  }, [dispatch]);
  return null;
}

export default LocalStorageData;
