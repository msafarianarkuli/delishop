import React from "react";
import {useUserCoin} from "template/context/UserCoinProvider";

function ProfileWalletCoinCardCoin() {
  const {data} = useUserCoin();
  return (
    <>
      <div>گنجینه</div>
      <div className="text-center text-[30px] font-light my-5">
        <span>{data}</span>
        <span className="mr-2">سکه</span>
      </div>
    </>
  );
}

export default ProfileWalletCoinCardCoin;
