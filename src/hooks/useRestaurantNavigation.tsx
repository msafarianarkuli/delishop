import {useMemo} from "react";
import {TDataBottomNavigation} from "components/bottomNavigation/BottomNavigation";
import {IconCart, IconHome, IconOrder, IconSearch} from "assets/icons";
import {useSelector} from "react-redux";
import {selectCartRestaurantList} from "redux/cart/cartRestaurantReducer";

type TRestaurantNavigation = "cart" | "search" | "order";

function useRestaurantNavigation(active?: TRestaurantNavigation) {
  const cartList = useSelector(selectCartRestaurantList);

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
        badge: !!cartList?.length,
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
  }, [active, cartList?.length]);
}

export default useRestaurantNavigation;
