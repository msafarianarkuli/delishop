import {ReactNode, useMemo} from "react";
import {
  IconCoin,
  // IconDrawerFavorite,
  IconDrawerGame,
  IconMessageSolid,
  IconOrderSolid,
  // IconShareSolid,
  IconSupportSolid,
  // IconTagSolid,
  IconWalletSolid,
  TIcons,
} from "assets/icons";
import {useUserWallet} from "template/context/UserWalletProvider";
import styles from "template/template.module.scss";
import {useUserCoin} from "template/context/UserCoinProvider";
import usePrivateLink from "hooks/usePrivateLink";
import {useSession} from "next-auth/react";
import aa from "assets/images/homeGame.svg";
import crush from "assets/images/homeGame2.svg";

interface IDataItems {
  id: number;
  title: string;
  icon: TIcons;
  link: string;
  left?: ReactNode;
  image?: HTMLImageElement;
}

type TData = IDataItems[];

function useDrawerRoutes(): TData {
  const {data: session} = useSession();
  const {data} = useUserWallet();
  const {data: CoinData} = useUserCoin();
  const walletLink = usePrivateLink({link: "/profile/wallet"});

  const Coin = useMemo(() => {
    return (
      <div className={styles.drawer_coin_container}>
        <IconCoin className="w-5 h-5" />
        <div className="h-5 text-[15px] font-medium mx-2">{CoinData}</div>
      </div>
    );
  }, [CoinData]);

  return useMemo(() => {
    return [
      {
        id: 1,
        title:
          data != null
            ? `کیف پول (${Number(data?.toString()?.slice(0, -1)).toLocaleString("en-US")} تومان)`
            : "کیف پول",
        icon: IconWalletSolid,
        link: walletLink,
        left: Coin,
      },
      {
        id: 2,
        title: "لیست سفارشات",
        icon: IconOrderSolid,
        link: "/restaurant/order/active",
      },
      {
        id: 3,
        title: "پیام ها (2)",
        icon: IconMessageSolid,
        link: "/messages",
      },
      {
        id: 4,
        title: "aa",
        icon: IconDrawerGame,
        image: aa,
        link: `https://aa.delishop.me?token=${session?.user.token}&userId=${session?.user.useId}`,
      },
      {
        id: 5,
        title: "crush",
        icon: IconDrawerGame,
        image: crush,
        link: `https://crush.delishop.me?token=${session?.user.token}&userId=${session?.user.useId}`,
      },
      {
        id: 6,
        title: "پشتیبانی",
        icon: IconSupportSolid,
        link: "/support",
      },
      {
        id: 7,
        title: "فروشنده شوید",
        icon: IconSupportSolid,
        link: "https://delishop.me/vendor/",
      },
    ];
  }, [Coin, data, walletLink]);
}

export default useDrawerRoutes;
