import {useRouter} from "next/router";
import {AppHeader, AppHeaderBackBtn} from "components";
import React from "react";

function SupermarketSubcategoryHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 left-0 right-0 header_background">
      <AppHeader right={<AppHeaderBackBtn onClick={() => router.back()} />} />
    </div>
  );
}

export default SupermarketSubcategoryHeader;
