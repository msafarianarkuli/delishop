import {useMemo} from "react";
import {TDataBottomNavigation} from "components/bottomNavigation/BottomNavigation";
import {IconAccount, IconCart, IconHome, IconSearch} from "assets/icons";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "redux/store";
import {setIsDrawerOpen} from "redux/template/templateReducer";
import {selectCartSupermarketCount} from "redux/cartSupermraket/cartSupermarketReducer";

type TRestaurantNavigation = "cart" | "search";

function useSupermarketNavigation(active?: TRestaurantNavigation) {
  const dispatch = useDispatch<AppDispatch>();
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
        icon: IconAccount,
        title: "حساب من",
        onClick: () => dispatch(setIsDrawerOpen(true)),
        active: false,
      },
    ];
    return data;
  }, [active, count, dispatch]);
}

export default useSupermarketNavigation;
