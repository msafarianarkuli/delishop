import React from "react";
import {AppHeader, AppHeaderBackBtn} from "components";
import {useRouter} from "next/router";
import useTypeColor from "hooks/useTypeColor";
import classNames from "classnames";

function AddressMapSearchHeader() {
  const router = useRouter();
  const type = useTypeColor();

  const title = classNames({
    "font-medium": true,
    "text-primary": type === "default",
    "text-primarySupermarket": type === "supermarket",
  });
  return (
    <div className="fixed z-10 top-0 left-0 right-0 header_background">
      <AppHeader left={<div className={title}>تهران</div>} right={<AppHeaderBackBtn onClick={() => router.back()} />} />
    </div>
  );
}

export default AddressMapSearchHeader;
