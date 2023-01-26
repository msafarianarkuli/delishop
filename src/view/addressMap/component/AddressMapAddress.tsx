import {useMemo} from "react";
import {Button, Spin} from "antd";
import {IconLocationPin, IconSearch} from "assets/icons";
import useAddressMap from "view/addressMap/context/useAddressMap";
import styles from "view/addressMap/addressMap.module.scss";

function AddressMapAddress() {
  const {address, addressLoading} = useAddressMap();

  const showAddress = useMemo(() => {
    if (addressLoading) {
      return (
        <div className="flex flex-1 justify-center items-center pt-1">
          <Spin size="default" />
        </div>
      );
    }
    return address;
  }, [address, addressLoading]);

  return (
    <div className={styles.address_map_address_box}>
      <IconLocationPin className="w-[24px] h-auto" />
      <div className="w-[calc(100%-48px)] truncate px-2">{showAddress}</div>
      <Button className="border-0 p-0 rounded shadow-none">
        <IconSearch className="w-[24px] h-auto text-iconColor" />
      </Button>
    </div>
  );
}

export default AddressMapAddress;
