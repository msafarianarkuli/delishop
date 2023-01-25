import {useContext} from "react";
import {AddressMapContext} from "view/address/component/addressMap/context/AddressMapProvider";

function useAddressMap() {
  return useContext(AddressMapContext);
}

export default useAddressMap;
