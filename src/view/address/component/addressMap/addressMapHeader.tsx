import React from "react";
import {AppHeader, AppHeaderBackBtn} from "components";

function AddressMapHeader() {
  return (
    <div className="absolute z-[10000] top-0 right-0 left-0 pointer-events-none">
      <AppHeader right={<AppHeaderBackBtn className="pointer-events-auto" onClick={() => console.log("click")} />} />
    </div>
  );
}

export default AddressMapHeader;
