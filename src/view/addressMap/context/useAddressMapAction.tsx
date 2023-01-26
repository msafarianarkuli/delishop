import {useContext} from "react";
import {AddressMapContextAction} from "view/addressMap/context/AddressMapProvider";

function useAddressMapAction() {
  return useContext(AddressMapContextAction);
}

export default useAddressMapAction;
