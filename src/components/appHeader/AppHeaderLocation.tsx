import {IconArrowDown} from "assets/icons";
import Link from "next/link";

function AppHeaderLocation() {
  return (
    <Link href="/address" className="block text-[14px]">
      <div className="flex items-center justify-center">
        <span className="font-bold">خانه</span>
        <IconArrowDown className="w-3 h-auto text-iconColor mr-1" />
      </div>
      <div className="text-[13px] font-light max-w-[130px] truncate">کشاورز، پارک لاله، کارگر جنوبی</div>
    </Link>
  );
}

export default AppHeaderLocation;
