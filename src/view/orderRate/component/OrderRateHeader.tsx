import React from "react";
import {useRouter} from "next/router";
import {AppHeader, AppHeaderBackBtn} from "components";

function OrderRateHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 right-0 left-0 header_background">
      <AppHeader body="ثبت نظر" right={<AppHeaderBackBtn onClick={() => router.back()} />} />
    </div>
  );
}

export default OrderRateHeader;
