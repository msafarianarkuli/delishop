import AppMainTabRoute from "components/appTabRoute/AppMainTabRoute";
import {useMemo} from "react";
import styles from "components/appTabRoute/component/profileWalletTabRoute/profileWalletTabRoute.module.scss";
import IconHome from "assets/icons/new/IconHome";
import IconCoin from "assets/icons/new/IconCoin";
import IconGift from "assets/icons/new/IconGift";
import {useUserCoin} from "template/context/UserCoinProvider";

interface IWalletTabRoute {
  active: "home" | "historycoin" | "awardreceived";
}

function ProfileMainTabRoute({active}: IWalletTabRoute) {
  const {data} = useUserCoin();
  const routes = useMemo(() => {
    return [
      {
        link: "/",
        title: "خانه",
        active: active === "home",
        icon: IconHome,
      },
      {
        link: "/profile/game",
        title: active === "home" ? `سکه` : "گنجینه",
        active: active === "historycoin",
        icon: IconCoin,
      },
      {
        link: "/profile/awardreceived",
        title: "تخفیف ها",
        active: active === "awardreceived",
        icon: IconGift,
      },
    ];
  }, [active]);

  return (
    <div className={styles.profile_main_tab_route}>
      <AppMainTabRoute routes={routes} classNameContainer="px-screenSpace" classNameItem="w-1/3" data={data} />
    </div>
  );
}

export default ProfileMainTabRoute;
