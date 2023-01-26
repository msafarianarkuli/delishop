import {useContext} from "react";
import {AddressMapContext} from "view/addressMap/context/AddressMapProvider";

function useAddressMap() {
  return useContext(AddressMapContext);
}

export default useAddressMap;
