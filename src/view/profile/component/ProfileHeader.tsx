import React from "react";
import {AppHeader, BackBtn} from "components";
import {useRouter} from "next/router";

function ProfileHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 right-0 left-0 header_background">
      <AppHeader right={<BackBtn onClick={() => router.back()} />} body="حساب کاربری" />
    </div>
  );
}

export default ProfileHeader;
