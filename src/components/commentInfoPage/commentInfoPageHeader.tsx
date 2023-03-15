import React, {useMemo} from "react";
import {useRouter} from "next/router";
import {AppHeader, AppHeaderBackBtn} from "components/index";
import AppTabRoute from "components/appTabRoute/AppTabRoute";

interface IRestaurantOrderAppHeader {
  active: "info" | "comment";
  baseUrl: string;
}

function CommentInfoPageHeader({active, baseUrl}: IRestaurantOrderAppHeader) {
  const router = useRouter();
  const routes = useMemo(() => {
    return [
      {
        link: `${baseUrl}/comment/${router.query.id}`,
        title: "نظرات",
        active: active === "comment",
      },
      {
        link: `${baseUrl}/info/${router.query.id}`,
        title: "اطلاعات",
        active: active === "info",
      },
    ];
  }, [active, baseUrl, router.query.id]);

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

export default CommentInfoPageHeader;
