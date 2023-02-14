import React from "react";
import {AppHeader, AppHeaderBackBtn} from "components";
import {useRouter} from "next/router";
import {IconFilter} from "assets/icons";

function SupermarketCategoryHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 left-0 right-0 header_background">
      <AppHeader
        classNameContainer="border-b border-borderColor"
        left={
          <button>
            <IconFilter className="w-8 h-8 text-textColor" />
          </button>
        }
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
      />
    </div>
  );
}

export default SupermarketCategoryHeader;
