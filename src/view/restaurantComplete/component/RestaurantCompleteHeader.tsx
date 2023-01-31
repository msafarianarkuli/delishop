import React from "react";
import {AppHeader, AppHeaderBackBtn, AppHeaderDelete} from "components";
import {useRouter} from "next/router";

function RestaurantCompleteHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 right-0 left-0 header_background">
      <AppHeader
        left={<AppHeaderDelete />}
        body="تکمیل خرید"
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
      />
    </div>
  );
}

export default RestaurantCompleteHeader;
