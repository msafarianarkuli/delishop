import {AppHeader, BackBtn} from "components";
import {useRouter} from "next/router";
import Link from "next/link";

function RestaurantInfoHeaderBody() {
  return (
    <div className="flex w-full items-center justify-around font-normal">
      <Link href="/restaurant/comment/1">نظرات</Link>
      <div className="drop-shadow-[0px_6px_8px_rgba(255,255,255,0.25)] shadow-[0px_13px_8px_-8px_rgba(36,65,93,0.2)] px-12 py-2 rounded-full bg-[#E6E7EC]">
        اطلاعات
      </div>
    </div>
  );
}

function RestaurantInfoHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-[10000] top-0 right-0 left-0 header_background">
      <AppHeader right={<BackBtn onClick={() => router.back()} />} body={<RestaurantInfoHeaderBody />} />
    </div>
  );
}

export default RestaurantInfoHeader;
