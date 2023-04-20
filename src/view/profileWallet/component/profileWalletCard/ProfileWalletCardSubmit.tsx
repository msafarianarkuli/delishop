import React, {useMemo, useState} from "react";
import {Button} from "antd";
import {useProfileWalletChargeWallet} from "view/profileWallet/context/ProfileWalletChargeWalletProvider";
import {useSession} from "next-auth/react";
import {onlyNumberValue} from "utils/utils";
import getUserChargeWallet from "api/getUserChargeWallet";

function ProfileWalletCardSubmit() {
  const {data} = useSession();
  const [isLoading, setLoading] = useState(false);
  const walletCharge = useProfileWalletChargeWallet();
  const number = useMemo(() => +onlyNumberValue(walletCharge), [walletCharge]);

  return (
    <Button
      type="primary"
      className="submit-btn h-[40px] text-[15px] w-full disabled:hover:bg-[rgba(0,0,0,0.04)]"
      disabled={!number && !isNaN(number)}
      loading={isLoading}
      onClick={() => {
        const token = data?.user.token;
        if (token) {
          setLoading(true);
          getUserChargeWallet({price: `${number * 10}`, token})
            .then((res) => {
              const url = res.Data.payurl;
              if (url) {
                window.open(url, "_blank");
              }
            })
            .catch((err) => {
              console.log("ProfileWalletCardSubmit error", err);
            })
            .finally(() => setLoading(false));
        }
      }}
    >
      پرداخت
    </Button>
  );
}

export default ProfileWalletCardSubmit;
