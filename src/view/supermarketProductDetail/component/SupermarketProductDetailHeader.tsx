import React from "react";
import {AppHeader, AppHeaderBackBtn, AppHeaderCoin} from "components";
import {useRouter} from "next/router";

function SupermarketProductDetailHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 left-0 right-0 header_background">
      <AppHeader left={<AppHeaderCoin coin={1967} />} right={<AppHeaderBackBtn onClick={() => router.back()} />} />
    </div>
  );
}

export default SupermarketProductDetailHeader;
