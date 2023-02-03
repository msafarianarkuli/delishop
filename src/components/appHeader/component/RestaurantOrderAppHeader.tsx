import {AppHeader, AppHeaderBackBtn} from "components/index";
import {useRouter} from "next/router";
import {useMemo} from "react";
import AppTabRoute from "components/appTabRoute/AppTabRoute";

interface IRestaurantOrderAppHeader {
  active: "active" | "previous";
}

function RestaurantOrderAppHeader({active}: IRestaurantOrderAppHeader) {
  const router = useRouter();
  const routes = useMemo(() => {
    return [
      {
        link: "/restaurant/order/active",
        title: "سفارشات فعال",
        active: active === "active",
      },
      {
        link: "/restaurant/order/previous",
        title: "سفارشات قبلی",
        active: active === "previous",
      },
    ];
  }, [active]);

  return (
    <div className="fixed z-10 top-0 right-0 left-0 header_background">
      <AppHeader
        body={<AppTabRoute routes={routes} classNameContainer="mobile:mx-8 mx-4" classNameItem="w-1/2" />}
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
      />
    </div>
  );
}

export default RestaurantOrderAppHeader;
