import {IconLocationPin} from "assets/icons";
import Link from "next/link";
import {useMemo} from "react";
import {useSession} from "next-auth/react";

interface IAppHeaderLocation {
  supermarket?: boolean;
}

function AppHeaderLocation(props: IAppHeaderLocation) {
  const {supermarket} = props;
  const {status} = useSession();

  const url = useMemo(() => {
    let url = "/address/map";
    if (status === "authenticated") url = "/address";
    if (supermarket) url += "?supermarket=1";
    return url;
  }, [status, supermarket]);

  return (
    <Link href={url} className="block text-[13px]">
      <div className="flex items-center">
        <IconLocationPin className="w-4 h-4 text-iconColor ml-1" />
        <span className="font-semibold">خانه:</span>
        <div className="font-light mobile:max-w-[140px] max-w-[110px] truncate">کشاورز، پارک لاله، کارگر جنوبی</div>
      </div>
    </Link>
  );
}

export default AppHeaderLocation;
