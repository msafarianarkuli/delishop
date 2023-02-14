import React from "react";
import {AppHeader, AppHeaderBackBtn, AppHeaderCoin, AppHeaderLocation} from "components";
import {useRouter} from "next/router";

function SupermarketHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 right-0 left-0 header_background">
      <AppHeader
        left={<AppHeaderCoin coin={1964} />}
        body={<AppHeaderLocation supermarket />}
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
      />
    </div>
  );
}

export default SupermarketHeader;
