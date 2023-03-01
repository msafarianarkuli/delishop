import AppTabRoute from "components/appTabRoute/AppTabRoute";
import {useMemo} from "react";
import styles from "components/appTabRoute/component/profileWalletTabRoute/profileWalletTabRoute.module.scss";

interface IWalletTabRoute {
  active: "wallet" | "awardReceived" | "historyCoin";
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
        link: "/profile/awardreceived",
        title: "جایزه دریافتی",
        active: active === "awardReceived",
      },
      {
        link: "/profile/historycoin",
        title: "آمار گنجینه",
        active: active === "historyCoin",
      },
    ];
  }, [active]);

  return (
    <div className={styles.profile_wallet_tab_route}>
      <AppTabRoute routes={routes} classNameContainer="px-screenSpace" classNameItem="w-1/3" />
    </div>
  );
}

export default ProfileWalletTabRoute;
