import AddressMapProvider from "view/addressMap/context/AddressMapProvider";
import AddressMapHeader from "view/addressMap/component/addressMapHeader";
import dynamic from "next/dynamic";
import AddressMapItems from "view/addressMap/component/AddressMapItems";

const AddressMapLocation = dynamic(() => import("view/addressMap/component/AddressMapLocation"), {ssr: false});

function AddressMap() {
  return (
    <AddressMapProvider>
      <AddressMapHeader />
      <AddressMapLocation />
      <AddressMapItems />
    </AddressMapProvider>
  );
}

export default AddressMap;
