import {useMemo} from "react";
import {TDataBottomNavigation} from "components/bottomNavigation/BottomNavigation";
import {IconCart, IconHome, IconOrder, IconSearch} from "assets/icons";

type TRestaurantNavigation = "cart" | "search" | "order";

function useRestaurantNavigation(active?: TRestaurantNavigation) {
  return useMemo(() => {
    const data: TDataBottomNavigation = [
      {
        icon: IconHome,
        title: "خانه",
        link: "/",
        active: false,
      },
      {
        icon: IconCart,
        title: "سبد خرید",
        link: "/restaurant/cart",
        active: active === "cart",
      },
      {
        icon: IconSearch,
        title: "جستجو",
        link: "/restaurant/search",
        active: active === "search",
      },
      {
        icon: IconOrder,
        title: "سفارشات",
        link: "/restaurant/order/active",
        active: active === "order",
      },
    ];
    return data;
  }, [active]);
}

export default useRestaurantNavigation;
