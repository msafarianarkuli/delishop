import React from "react";
import {AppHeader, AppHeaderBackBtn} from "components";
import {useRouter} from "next/router";
import {Button} from "antd";
import {IconDeleteCart} from "assets/icons";

function RestaurantCartHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 right-0 left-0 header_background max-width-screen">
      <AppHeader
        left={
          <Button
            icon={<IconDeleteCart className="w-5 h-auto" />}
            className="flex items-center justify-center border-0 shadow-none p-0"
          />
        }
        body="سبد خرید"
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
      />
    </div>
  );
}

export default RestaurantCartHeader;
