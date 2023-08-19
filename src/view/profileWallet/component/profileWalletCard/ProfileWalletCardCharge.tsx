import React, {ChangeEvent, useCallback} from "react";
import {Button} from "antd";
import styles from "view/profileWallet/component/profileWalletCard/profileWalletCard.module.scss";
import {IconRoundedLeft, IconRoundedRight} from "assets/icons";
import {CustomInput} from "components";
import {onlyNumberValue} from "utils/utils";
import {
  setProfileWalletChargeWalletDecrease,
  setProfileWalletChargeWalletIncrease,
  setProfileWalletChargeWalletNumber,
  useProfileWalletChargeWallet,
  useProfileWalletChargeWalletAction,
} from "view/profileWallet/context/ProfileWalletChargeWalletProvider";

function ProfileWalletCardCharge() {
  const dispatch = useProfileWalletChargeWalletAction();
  const number = useProfileWalletChargeWallet();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const onlyNumber = onlyNumberValue(value);
      let text = "";
      if (onlyNumber) {
        text = Number.parseInt(onlyNumber).toLocaleString("en-US");
      }
      // setNumber(text);
      dispatch(setProfileWalletChargeWalletNumber(text));
    },
    [dispatch]
  );

  return (
    <>
      <div>افزایش اعتبار</div>
      <div className="flex items-center my-5">
        <Button
          onClick={() => dispatch(setProfileWalletChargeWalletIncrease())}
          className={styles.profile_wallet_card_btn}
        >
          <IconRoundedRight className="w-6 h-6 mx-auto" />
        </Button>
        <CustomInput
          id="increase"
          classNameContainer="flex flex-1"
          className={styles.profile_wallet_card_input}
          value={`${number ? number : 0} تومان`}
          onChange={onChange}
        />
        <Button
          onClick={() => dispatch(setProfileWalletChargeWalletDecrease())}
          className={styles.profile_wallet_card_btn}
        >
          <IconRoundedLeft className="w-6 h-6 mx-auto" />
        </Button>
      </div>
    </>
  );
}

export default ProfileWalletCardCharge;
