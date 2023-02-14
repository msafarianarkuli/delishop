import React from "react";
import AddressMapCurrentLocation from "view/addressMap/component/AddressMapCurrentLocation";
import AddressMapAddress from "view/addressMap/component/AddressMapAddress";
import AddressMapSubmit from "view/addressMap/component/AddressMapSubmit";
import useTypeColor from "hooks/useTypeColor";

function AddressMapItems() {
  const type = useTypeColor();

  if (!type) return null;
  return (
    <div className="fixed z-[10000] bottom-[40px] right-[19px] left-[19px] pointer-events-none">
      <div className="w-full max-w-[662px] mx-auto">
        <AddressMapCurrentLocation />
        <AddressMapAddress type={type} />
        <AddressMapSubmit type={type} />
      </div>
    </div>
  );
}

export default AddressMapItems;
