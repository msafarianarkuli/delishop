import {IconLocationPin} from "assets/icons";
import Link from "next/link";
import {useMemo} from "react";
import {useSession} from "next-auth/react";
import usePathnameQuery from "hooks/usePathnameQuery";
import {useSelector} from "react-redux";
import {selectAddressMapLocationData} from "redux/addressMap/addressMapReducer";

interface IAppHeaderLocation {
  supermarket?: boolean;
}

function AppHeaderLocation(props: IAppHeaderLocation) {
  const {supermarket} = props;
  const locationData = useSelector(selectAddressMapLocationData);
  const {status} = useSession();
  const query = useMemo(() => new URLSearchParams(""), []);
  const {pathname} = usePathnameQuery();

  const url = useMemo(() => {
    let url = "/address/map";
    if (status === "authenticated") url = "/address";
    if (supermarket) query.set("supermarket", "1");
    if (pathname && pathname !== "/") query.set("callbackUrl", encodeURI(pathname));
    url += query.toString() ? `?${query.toString()}` : "";
    return url;
  }, [pathname, query, status, supermarket]);

  return (
    <Link href={url} className="block text-[13px]">
      <div className="flex items-center">
        <IconLocationPin className="w-4 h-4 text-iconColor ml-1" />
        <span className="font-semibold">خانه:</span>
        <div className="font-light mobile:max-w-[140px] max-w-[110px] truncate">{locationData?.formatted_address}</div>
      </div>
    </Link>
  );
}

export default AppHeaderLocation;
