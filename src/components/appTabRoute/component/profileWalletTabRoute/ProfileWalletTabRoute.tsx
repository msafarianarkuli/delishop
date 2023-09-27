import AppTabRoute from "components/appTabRoute/AppTabRoute";
import {useMemo} from "react";
import styles from "components/appTabRoute/component/profileWalletTabRoute/profileWalletTabRoute.module.scss";
import AppHeaderCoin from "components/appHeader/AppHeaderCoin";

interface IWalletTabRoute {
  active: "wallet" | "game" | "history";
}

function ProfileWalletTabRoute({active}: IWalletTabRoute) {
  const routes = useMemo(() => {
    return [
      {
        link: "/profile/wallet",
        title: "کیف پول",
        active: active === "wallet",
      },
      {
        link: "/profile/historycoin",
        title: "آمار گنجینه",
        active: active === "history",
      },
      {
        link: "/profile/game",
        title: "بازی کنید",
        active: active === "game",
      },
    ];
  }, [active]);

  return (
    <div className={styles.profile_wallet_tab_route}>
      <div className={`${styles.profile_wallet_coin} my-4`}>
        <AppHeaderCoin />
      </div>
      <AppTabRoute routes={routes} classNameContainer="px-screenSpace" classNameItem="w-1/3" />
    </div>
  );
}

export default ProfileWalletTabRoute;
