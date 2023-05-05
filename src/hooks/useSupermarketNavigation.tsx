import {useMemo} from "react";
import {TDataBottomNavigation} from "components/bottomNavigation/BottomNavigation";
import {IconCart, IconHome, IconOrder, IconSearch} from "assets/icons";
import {useSelector} from "react-redux";
import {selectCartSupermarketCount} from "redux/cartSupermraket/cartSupermarketReducer";

type TSupermarketNavigation = "cart" | "search" | "order";

function useSupermarketNavigation(active?: TSupermarketNavigation) {
  const count = useSelector(selectCartSupermarketCount);
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
        link: "/supermarket/cart",
        active: active === "cart",
        badge: !!count,
        badgeNumber: count,
      },
      {
        icon: IconSearch,
        title: "جستجو",
        link: "/supermarket/search",
        active: active === "search",
      },
      {
        icon: IconOrder,
        title: "سفارشات",
        link: "/supermarket/order/active",
        active: active === "order",
      },
    ];
    return data;
  }, [active, count]);
}

export default useSupermarketNavigation;
