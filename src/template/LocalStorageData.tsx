import {useEffect} from "react";
import {addressMapLocalStorageKey, setAddressMap} from "redux/addressMap/addressMapReducer";
import {useDispatch} from "react-redux";

function LocalStorageData() {
  const dispatch = useDispatch();
  useEffect(() => {
    const addressMap = localStorage.getItem(addressMapLocalStorageKey);
    if (addressMap) {
      dispatch(setAddressMap(JSON.parse(addressMap)));
    }
  }, [dispatch]);
  return null;
}

export default LocalStorageData;
