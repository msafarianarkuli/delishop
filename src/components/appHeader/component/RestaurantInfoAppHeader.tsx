import React, {useMemo} from "react";
import {AppHeader, AppHeaderBackBtn} from "components/index";
import AppTabRoute from "components/appTabRoute/AppTabRoute";
import {useRouter} from "next/router";

interface IRestaurantOrderAppHeader {
  active: "info" | "comment";
}

function RestaurantInfoAppHeader({active}: IRestaurantOrderAppHeader) {
  const router = useRouter();
  const routes = useMemo(() => {
    return [
      {
        link: `/restaurant/comment/${router.query.id}`,
        title: "نظرات",
        active: active === "comment",
      },
      {
        link: `/restaurant/info/${router.query.id}`,
        title: "اطلاعات",
        active: active === "info",
      },
    ];
  }, [active, router.query.id]);

  return (
    <div className="fixed z-[10000] top-0 right-0 left-0 header_background">
      <AppHeader
        body={
          <AppTabRoute
            routes={routes}
            classNameItemActive="text-textColor"
            classNameContainer="mobile:mx-8 mx-4"
            classNameItem="w-1/2"
          />
        }
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
      />
    </div>
  );
}

export default RestaurantInfoAppHeader;
