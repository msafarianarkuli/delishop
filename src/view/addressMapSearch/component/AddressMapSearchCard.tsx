import React from "react";
import {IconLocation} from "assets/icons";

function AddressMapSearchCard({text}: {text: string}) {
  return (
    <div className="flex items-center border-b border-borderColor py-5">
      <IconLocation className="w-5 h-5 text-textColor" />
      <div className="flex flex-1 mr-2 text-[13px]">{text}</div>
    </div>
  );
}

export default AddressMapSearchCard;
