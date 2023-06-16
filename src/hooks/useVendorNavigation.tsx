import {useMemo} from "react";
import {useSelector} from "react-redux";
import {selectCartRestaurantList} from "redux/cartRestaurant/cartRestaurantReducer";
import {TDataBottomNavigation} from "components/bottomNavigation/BottomNavigation";
import {IconCart, IconHome, IconOrder, IconSearch} from "assets/icons";

interface IVendorNavigation {
  active?: "cart" | "search" | "order";
  vendor: string;
}

function useVendorNavigation(props: IVendorNavigation) {
  const {active, vendor} = props;
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
        link: `/${vendor}/cart`,
        active: active === "cart",
        badge: !!cartList?.length,
      },
      {
        icon: IconSearch,
        title: "جستجو",
        link: `/${vendor}/search`,
        active: active === "search",
      },
      {
        icon: IconOrder,
        title: "سفارشات",
        link: `/${vendor}/order/active`,
        active: active === "order",
      },
    ];
    return data;
  }, [active, cartList?.length, vendor]);
}

export default useVendorNavigation;
