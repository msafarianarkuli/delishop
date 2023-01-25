import AddressMapHeader from "view/address/component/addressMap/addressMapHeader";
import AddressMapAddress from "view/address/component/addressMap/AddressMapAddress";
import AddressMapProvider from "view/address/component/addressMap/context/AddressMapProvider";
import AddressMapSubmit from "view/address/component/addressMap/AddressMapSubmit";
import AddressMapCurrentLocation from "view/address/component/addressMap/AddressMapCurrentLocation";
import dynamic from "next/dynamic";

const AddressMapLocation = dynamic(() => import("view/address/component/addressMap/AddressMapLocation"), {ssr: false});

function AddressMap() {
  return (
    <AddressMapProvider>
      <div className="relative w-full h-screen">
        <AddressMapHeader />
        <AddressMapLocation />
        <div className="absolute z-[10000] bottom-[40px] right-[19px] left-[19px] pointer-events-none">
          <AddressMapCurrentLocation />
          <AddressMapAddress />
          <AddressMapSubmit />
        </div>
      </div>
    </AddressMapProvider>
  );
}

export default AddressMap;
