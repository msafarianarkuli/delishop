import {useMemo} from "react";
import {TDataBottomNavigation} from "components/bottomNavigation/BottomNavigation";
import {IconAccount, IconCart, IconHome, IconSearch} from "assets/icons";
import {useDispatch} from "react-redux";
import {AppDispatch} from "redux/store";
import {setIsDrawerOpen} from "redux/template/templateReducer";

type TRestaurantNavigation = "cart" | "search";

function useSupermarketNavigation(active?: TRestaurantNavigation) {
  const dispatch = useDispatch<AppDispatch>();
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
  }, [active, dispatch]);
}

export default useSupermarketNavigation;
