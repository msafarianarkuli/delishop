import React from "react";

function ProfileWalletCoinCardCurrencyValue() {
  return (
    <div className="flex flex-1 justify-center items-center inner_box h-[40px] ml-3">
      <span>{(10000).toLocaleString("en-US")}</span>
      <span className="">+</span>
    </div>
  );
}

export default ProfileWalletCoinCardCurrencyValue;
