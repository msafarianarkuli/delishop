import {ReactNode, useMemo} from "react";
import {
  IconCoin,
  IconDrawerFavorite,
  IconDrawerGame,
  IconMessageSolid,
  IconOrderSolid,
  IconShareSolid,
  IconSupportSolid,
  IconTagSolid,
  IconWalletSolid,
  TIcons,
} from "assets/icons";
import {useUserWallet} from "template/context/UserWalletProvider";
import styles from "template/template.module.scss";
import {useUserCoin} from "template/context/UserCoinProvider";
import usePrivateLink from "hooks/usePrivateLink";

interface IDataItems {
  title: string;
  icon: TIcons;
  link: string;
  left?: ReactNode;
}

type TData = IDataItems[];

function useDrawerRoutes(): TData {
  const {data} = useUserWallet();
  const {data: CoinData} = useUserCoin();
  const walletLink = usePrivateLink({link: "/profile/wallet"});

  const Coin = useMemo(() => {
    return (
      <div className={styles.drawer_coin_container}>
        <IconCoin className="w-5 h-5" />
        <div className="h-5 text-[15px] font-medium mx-2">{CoinData}</div>
        <div>سکه</div>
      </div>
    );
  }, [CoinData]);

  return useMemo(() => {
    return [
      {
        title: data != null ? `کیف پول (${data} تومان)` : "کیف پول",
        icon: IconWalletSolid,
        link: walletLink,
        left: Coin,
      },
      {
        title: "لیست سفارشات",
        icon: IconOrderSolid,
        link: "/",
      },
      {
        title: "پیام ها (0)",
        icon: IconMessageSolid,
        link: "/",
      },
      {
        title: "علاقه مندی ها",
        icon: IconDrawerFavorite,
        link: "/",
      },
      {
        title: "آگهی ها",
        icon: IconTagSolid,
        link: "/",
      },
      {
        title: "بازی ها",
        icon: IconDrawerGame,
        link: "/",
      },
      {
        title: "پشتیبانی",
        icon: IconSupportSolid,
        link: "/",
      },
      {
        title: "معرفی به دوستان",
        icon: IconShareSolid,
        link: "/",
      },
    ];
  }, [Coin, data, walletLink]);
}

export default useDrawerRoutes;
