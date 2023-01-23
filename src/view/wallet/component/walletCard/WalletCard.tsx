import {Button} from "antd";
import {CustomInput} from "components";
import {IconRoundedLeft, IconRoundedRight} from "assets/icons";
import {ChangeEvent, useCallback, useState} from "react";
import {onlyNumberValue} from "utils/utils";
import styles from "view/wallet/component/walletCard/walletCard.module.scss";

function WalletCard() {
  const [number, setNumber] = useState<string>("");

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const onlyNumber = onlyNumberValue(value);
    let text = "";
    if (onlyNumber) {
      text = Number.parseInt(onlyNumber).toLocaleString("en-US");
    }
    setNumber(text);
  }, []);

  const onClickIncrease = useCallback(() => {
    let value = Number.parseInt(onlyNumberValue(number || "0"));
    value += 10000;
    const tmp = value.toLocaleString("en-US");
    setNumber(tmp);
  }, [number]);

  const onClickDecrease = useCallback(() => {
    let value = Number.parseInt(onlyNumberValue(number || "0"));
    if (value > 10000) {
      value -= 10000;
      const tmp = value.toLocaleString("en-US");
      setNumber(tmp);
    } else {
      setNumber("");
    }
  }, [number]);

  return (
    <div className={styles.wallet_card_container}>
      <div>موجودی کیف پول شما</div>
      <div className="text-center text-[30px] font-light my-5">
        <span>{(210000).toLocaleString("en-US")}</span>
        <span className="mr-2">تومان</span>
      </div>
      <div>افزایش اعتبار</div>
      <div className="flex items-center my-5">
        <Button onClick={onClickIncrease} className={styles.wallet_card_btn}>
          <IconRoundedRight className="w-6 h-6 mx-auto" />
        </Button>
        <CustomInput
          id="increase"
          classNameContainer="flex flex-1"
          className={styles.wallet_card_input}
          value={number}
          onChange={onChange}
        />
        <Button onClick={onClickDecrease} className={styles.wallet_card_btn}>
          <IconRoundedLeft className="w-6 h-6 mx-auto" />
        </Button>
      </div>
      <Button type="primary" className="submit-btn h-[40px] text-[15px] w-full">
        پرداخت
      </Button>
    </div>
  );
}

export default WalletCard;
