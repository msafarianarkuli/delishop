import React from "react";
import {AppHeader, AppHeaderBackBtn} from "components";
import {useRouter} from "next/router";

function ProfileHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 right-0 left-0 header_background">
      <AppHeader right={<AppHeaderBackBtn onClick={() => router.back()} />} body="حساب کاربری" />
    </div>
  );
}

export default ProfileHeader;
