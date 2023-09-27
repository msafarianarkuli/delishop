import {IconLocationPin} from "assets/icons";
import Link from "next/link";
import {useMemo} from "react";
import {useSession} from "next-auth/react";
import usePathnameQuery from "hooks/usePathnameQuery";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";

interface IAppHeaderLocation {
  supermarket?: boolean;
}

function AppHeaderLocation(props: IAppHeaderLocation) {
  const {supermarket} = props;
  const {locationData, userAddress} = useSelector(selectAddressMap);
  const {status} = useSession();
  const query = useMemo(() => new URLSearchParams(""), []);
  const {pathname} = usePathnameQuery();

  const title = useMemo(() => userAddress?.title || "", [userAddress?.title]);
  const address = useMemo(() => {
    let text = userAddress?.address || locationData?.formatted_address || "انتخاب آدرس";
    if (text.startsWith("تهران")) {
      const tmp = text.split("،");
      tmp.shift();
      text = tmp.join("،");
    }
    return text;
  }, [locationData?.formatted_address, userAddress?.address]);

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
        <IconLocationPin className="w-5 h-5 text-iconColor ml-1" />
        {title ? <span className="font-semibold">{title}:</span> : null}
        <div className="font-light mobile:max-w-[140px] max-w-[110px] truncate">{address}</div>
      </div>
    </Link>
  );
}

export default AppHeaderLocation;
