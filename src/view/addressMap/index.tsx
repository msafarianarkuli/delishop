import AddressMapProvider from "view/addressMap/context/AddressMapProvider";
import AddressMapHeader from "view/addressMap/component/addressMapHeader";
import AddressMapCurrentLocation from "view/addressMap/component/AddressMapCurrentLocation";
import AddressMapAddress from "view/addressMap/component/AddressMapAddress";
import AddressMapSubmit from "view/addressMap/component/AddressMapSubmit";
import dynamic from "next/dynamic";

const AddressMapLocation = dynamic(() => import("view/addressMap/component/AddressMapLocation"), {ssr: false});

function AddressMap() {
  return (
    <AddressMapProvider>
      <AddressMapHeader />
      <AddressMapLocation />
      <div className="fixed z-[10000] bottom-[40px] right-[19px] left-[19px] pointer-events-none">
        <AddressMapCurrentLocation />
        <AddressMapAddress />
        <AddressMapSubmit />
      </div>
    </AddressMapProvider>
  );
}

export default AddressMap;
