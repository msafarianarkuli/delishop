import {useMemo} from "react";
import {Button, Spin} from "antd";
import {IconLocationPin, IconSearch} from "assets/icons";
import useAddressMap from "view/addressMap/context/useAddressMap";
import styles from "view/addressMap/addressMap.module.scss";
import {useRouter} from "next/router";
import classNames from "classnames";
import {TUseTypeColor} from "hooks/useTypeColor";
import usePathnameQuery from "hooks/usePathnameQuery";

interface IAddressMapAddress {
  type: TUseTypeColor;
}

function AddressMapAddress({type}: IAddressMapAddress) {
  const router = useRouter();
  const {address, addressLoading} = useAddressMap();
  const {querySearch} = usePathnameQuery();

  const showAddress = useMemo(() => {
    const spinClassName = classNames({
      "supermarket-spin": type === "supermarket",
    });
    if (addressLoading) {
      return (
        <div className="flex flex-1 justify-center items-center pt-1">
          <Spin size="default" className={spinClassName} />
        </div>
      );
    }
    return address;
  }, [address, addressLoading, type]);

  return (
    <div className={styles.address_map_address_box}>
      <IconLocationPin className="w-[24px] h-auto" />
      <div className="w-[calc(100%-48px)] truncate px-2">{showAddress}</div>
      <Button
        className="border-0 p-0 rounded shadow-none pointer-events-auto"
        onClick={() => router.push("/address/map/search" + querySearch)}
      >
        <IconSearch className="w-[24px] h-auto text-iconColor" />
      </Button>
    </div>
  );
}

export default AddressMapAddress;
