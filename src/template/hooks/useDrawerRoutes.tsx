import {useMemo} from "react";
import {
  IconDrawerFavorite,
  IconDrawerGame,
  IconMessageSolid,
  IconOrderSolid,
  IconShareSolid,
  IconSupportSolid,
  IconTagSolid,
  IconWalletSolid,
} from "assets/icons";
import {useUserWallet} from "template/context/UserWalletProvider";

function useDrawerRoutes() {
  const {data} = useUserWallet();
  return useMemo(() => {
    return [
      {
        title: `کیف پول (${data} تومان)`,
        icon: IconWalletSolid,
        link: "/profile/wallet",
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
  }, [data]);
}

export default useDrawerRoutes;
