import React from "react";
import {useRouter} from "next/router";
import {AppHeader, AppHeaderBackBtn} from "components";
import Link from "next/link";

function RestaurantCommentHeaderBody() {
  const router = useRouter();

  return (
    <div className="flex w-full items-center justify-around font-normal">
      <div className="drop-shadow-[0px_6px_8px_rgba(255,255,255,0.25)] shadow-[0px_13px_8px_-8px_rgba(36,65,93,0.2)] px-12 py-2 rounded-full bg-[#E6E7EC]">
        نظرات
      </div>
      <Link href={`/restaurant/info/${router.query.id}`}>اطلاعات</Link>
    </div>
  );
}

function RestaurantCommentHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-[10000] top-0 right-0 left-0 header_background">
      <AppHeader right={<AppHeaderBackBtn onClick={() => router.back()} />} body={<RestaurantCommentHeaderBody />} />
    </div>
  );
}

export default RestaurantCommentHeader;
