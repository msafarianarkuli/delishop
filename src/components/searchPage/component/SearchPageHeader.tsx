import React from "react";
import {AppHeader, AppHeaderBackBtn} from "components/index";
import {useRouter} from "next/router";

function SearchPageHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-[10000] top-0 right-0 left-0 header_background">
      <AppHeader right={<AppHeaderBackBtn onClick={() => router.back()} />} />
    </div>
  );
}

export default SearchPageHeader;
