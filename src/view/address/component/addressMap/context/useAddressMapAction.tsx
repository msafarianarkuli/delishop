import {useContext} from "react";
import {AddressMapContextAction} from "view/address/component/addressMap/context/AddressMapProvider";

function useAddressMapAction() {
  return useContext(AddressMapContextAction);
}

export default useAddressMapAction;
