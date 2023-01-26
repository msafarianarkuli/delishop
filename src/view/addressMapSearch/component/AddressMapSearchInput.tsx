import React, {useState} from "react";
import {CustomInput} from "components";
import {IconClose} from "assets/icons";

function AddressMapSearchInput() {
  const [text, setText] = useState("");
  return (
    <>
      <CustomInput
        id="search"
        autoComplete="off"
        className="input-transparent h-[40px] border-0 border-b rounded-none bg-transparent shadow-none"
        value={text}
        placeholder="جستجو"
        suffix={
          text ? (
            <button
              className="flex items-center justify-center w-5 h-5 bg-textColorLight rounded-full"
              onClick={() => setText("")}
            >
              <IconClose className="w-2 h-2 text-white" />
            </button>
          ) : (
            <span />
          )
        }
        onChange={(e) => {
          const value = e.target.value;
          setText(value);
        }}
      />
    </>
  );
}

export default AddressMapSearchInput;
