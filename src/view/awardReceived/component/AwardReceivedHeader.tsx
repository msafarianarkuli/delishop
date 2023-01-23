import React from "react";
import {AppHeader, AppHeaderBackBtn, AppHeaderCoin} from "components";
import {useRouter} from "next/router";

function AwardReceivedHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 right-0 left-0">
      <AppHeader right={<AppHeaderBackBtn onClick={() => router.back()} />} left={<AppHeaderCoin coin={9610} />} />
    </div>
  );
}

export default AwardReceivedHeader;
