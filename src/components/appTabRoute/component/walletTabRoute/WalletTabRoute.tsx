import AppTabRoute from "components/appTabRoute/AppTabRoute";
import {useMemo} from "react";
import styles from "components/appTabRoute/component/walletTabRoute/walletTabRoute.module.scss";

interface IWalletTabRoute {
  active: "wallet" | "awardReceived" | "historyCoin";
}

function WalletTabRoute({active}: IWalletTabRoute) {
  const routes = useMemo(() => {
    return [
      {
        link: "/wallet",
        title: "کیف پول",
        active: active === "wallet",
      },
      {
        link: "/awardreceived",
        title: "جایزه دریافتی",
        active: active === "awardReceived",
      },
      {
        link: "/historycoin",
        title: "آمار گنجینه",
        active: active === "historyCoin",
      },
    ];
  }, [active]);

  return (
    <div className={styles.wallet_tab_route}>
      <AppTabRoute routes={routes} classNameContainer="px-screenSpace" classNameItem="w-1/3" />
    </div>
  );
}

export default WalletTabRoute;
