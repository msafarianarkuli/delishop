import React, {MouseEventHandler} from "react";
import {IconLocation} from "assets/icons";

interface IAddressMapSearchCard {
  text: string;
  onClick?: MouseEventHandler;
}

function AddressMapSearchCard(props: IAddressMapSearchCard) {
  const {text, onClick} = props;
  return (
    <button onClick={onClick} className="flex w-full text-right items-center border-b border-borderColor py-5">
      <IconLocation className="w-5 h-5 text-textColor" />
      <div className="flex flex-1 mr-2 text-[13px]">{text}</div>
    </button>
  );
}

export default AddressMapSearchCard;
