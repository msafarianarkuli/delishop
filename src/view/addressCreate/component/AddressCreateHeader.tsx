import React from "react";
import {AppHeader, AppHeaderBackBtn} from "components";
import {useRouter} from "next/router";

function AddressCreateHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-[10000] top-0 right-0 left-0 header_background">
      <AppHeader body="افزودن آدرس" right={<AppHeaderBackBtn onClick={() => router.back()} />} />
    </div>
  );
}

export default AddressCreateHeader;
