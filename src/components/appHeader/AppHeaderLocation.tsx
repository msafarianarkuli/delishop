import {IconLocationPin} from "assets/icons";
import Link from "next/link";

function AppHeaderLocation() {
  return (
    <Link href="/address" className="block text-[13px]">
      <div className="flex items-center">
        <IconLocationPin className="w-4 h-4 text-iconColor ml-1" />
        <span className="font-semibold">خانه:</span>
        <div className="font-light mobile:max-w-[140px] max-w-[110px] truncate">کشاورز، پارک لاله، کارگر جنوبی</div>
      </div>
    </Link>
  );
}

export default AppHeaderLocation;
