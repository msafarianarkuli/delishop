import {Button, Tooltip} from "antd";
import {IconCoinProfile} from "assets/icons";
import {useCallback, useEffect, useState} from "react";
import getCoupon from "api/getCoupon";
import {useSession} from "next-auth/react";
import {useQueryClient} from "react-query";
import {QUERY_KEY_USER_PROFILE_WALLET_COUPON} from "view/profileWallet/context/ProfileWalletCouponDataProvider";
import {QUERY_KEY_USER_COIN} from "template/context/UserCoinProvider";
import {QUERY_KEY_USER_WALLET} from "template/context/UserWalletProvider";
import line from "assets/images/line.png";
import styles from "view/ProfileAwardReceived/component/profileAwardReceivedCard.module.scss";
import {QUERY_KEY_USER_AWARD_RECEIVED} from "view/ProfileAwardReceived/context/ProfileAwardReceivedDataProvider";
import {toast} from "react-toastify";
import IconErrorAlert from "assets/icons/IconErrorAlert";
import IconWarnAlert from "assets/icons/IconWarnAllert";

interface ProfileWalletCouponCard {
  id: number;
  title: string;
  value: string;
  description: string | null;
  name: string;
}

function ProfileWalletCouponCard(props: ProfileWalletCouponCard) {
  const {value, description, title, id, name} = props;
  const [isLoading, setIsLoading] = useState(false);
  const {data} = useSession();
  const queryClient = useQueryClient();
  const [isTooltip, setIsTooltip] = useState(false);
  const [chargeNumber, setChargeNumber] = useState("");

  useEffect(() => {
    let matches = description?.match(/(\d+)/);
    if (matches) {
      setChargeNumber(matches[0]);
    }
  }, []);

  console.log("name", name);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isTooltip) {
      timeout = setTimeout(() => setIsTooltip(false), 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isTooltip]);

  const onClick = useCallback(async () => {
    if (data?.user.token) {
      setIsLoading(true);
      try {
        const res = await getCoupon({
          id,
          token: data.user.token,
        });
        if (name.includes("discount")) {
          toast.warn(`کد تخفیف ${chargeNumber} هزار تومانی دریافت شد`, {
            icon: <IconWarnAlert className="" />,
          });
        } else {
          toast.warn(`مبلغ ${chargeNumber} هزار تومان کیف پول شما شارژ شد`, {
            icon: <IconWarnAlert className="" />,
          });
        }

        console.log("getCoupon res", res);
        await queryClient.invalidateQueries(QUERY_KEY_USER_WALLET, {
          exact: true,
        });
        await queryClient.invalidateQueries(QUERY_KEY_USER_COIN, {
          exact: true,
        });
        await queryClient.invalidateQueries(QUERY_KEY_USER_PROFILE_WALLET_COUPON, {
          exact: true,
        });
        await queryClient.invalidateQueries(QUERY_KEY_USER_AWARD_RECEIVED, {
          exact: true,
        });
        console.log("queryClient", queryClient);
        setIsLoading(false);
        setIsTooltip(true);
      } catch (err: any) {
        setIsLoading(false);
        if (err?.data?.message === "insufficient points") {
          toast.error("تعداد سکه شما کافی نیست", {
            icon: <IconErrorAlert className="" />,
          });
        } else {
          toast.error("خطایی رخ داده، مجددا تلاش کنید", {
            icon: <IconErrorAlert className="" />,
          });
        }

        console.log("getCoupon err", err);
      }
    }
  }, [data?.user.token, id, queryClient]);

  return (
    <div className={styles.profile_award_received_card_container}>
      <div className={styles.profile_award_received_card_content}>
        <div className="text-[9px]">{title}</div>
        <div className="flex my-[10px] items-center">
          <div className="flex flex-1 justify-center bg-[#E1E2E8] font-semibold text-[10px] rounded-md p-1 border border-dashed border-borderColor break-all">
            {value}
          </div>
          <Tooltip placement="top" title={`${title} دریافت شد`} open={isTooltip}>
            <Button loading={isLoading} className={styles.profile_award_received_card_copy} onClick={onClick}>
              دریافت
            </Button>
          </Tooltip>
        </div>
        <div className="font-medium text-[9px]">{description}</div>
      </div>
      <div className={styles.profile_award_received_card_ticket}>
        <IconCoinProfile className="w-7 h-7" />
        <div className="absolute right-[-1px] top-[8px] bottom-0 w-[1px]">
          <img src={line.src} alt={title} className="w-full h-full object-center object-cover" />
        </div>
      </div>
    </div>
  );
}

export default ProfileWalletCouponCard;
