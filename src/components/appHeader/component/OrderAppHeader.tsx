import {AppHeader, AppHeaderBackBtn} from "components/index";
import {useRouter} from "next/router";
import {useMemo} from "react";
import AppTabRoute from "components/appTabRoute/AppTabRoute";

interface IRestaurantOrderAppHeader {
  active: "active" | "previous";
  activeLink: string;
  previousLink: string;
}

function OrderAppHeader({active, activeLink, previousLink}: IRestaurantOrderAppHeader) {
  const router = useRouter();
  const routes = useMemo(() => {
    return [
      {
        link: activeLink,
        title: "سفارشات فعال",
        active: active === "active",
      },
      {
        link: previousLink,
        title: "سفارشات قبلی",
        active: active === "previous",
      },
    ];
  }, [active, activeLink, previousLink]);

  return (
    <div className="fixed z-10 top-0 right-0 left-0 header_background">
      <AppHeader
        body={<AppTabRoute routes={routes} classNameContainer="mobile:mx-8 mx-4" classNameItem="w-1/2" />}
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
      />
    </div>
  );
}

export default OrderAppHeader;
