import React, {useMemo, useState} from "react";
import {Button} from "antd";
import {useProfileWalletChargeWallet} from "view/profileWallet/context/ProfileWalletChargeWalletProvider";
import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import {useSession} from "next-auth/react";
import {IUserChargeWalletRes} from "types/interfaceUserChargeWallet";
import {onlyNumberValue} from "utils/utils";

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
          const url = API.USER_WALLET_CHARGE + "/" + number;
          axiosService<IUserChargeWalletRes>({url, method: "get", token})
            .then((res) => {
              const url = res.data?.Data?.payurl;
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
