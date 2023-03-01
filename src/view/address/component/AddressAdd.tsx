import styles from "view/address/address.module.scss";
import {IconAddAddress} from "assets/icons";
import Link from "next/link";
import classNames from "classnames";
import useTypeColor from "hooks/useTypeColor";
import usePathnameQuery from "hooks/usePathnameQuery";

function AddressAdd() {
  const type = useTypeColor();
  const {querySearch} = usePathnameQuery();

  const container = classNames({
    [styles.address_add]: true,
    "border-primary": type === "default",
    "border-primarySupermarket": type === "supermarket",
  });

  return (
    <Link href={`/address/create${querySearch}`} className={container}>
      <IconAddAddress className="w-[18px] h-[18px]" />
      <div className="mr-2">افزودن آدرس جدید</div>
    </Link>
  );
}

export default AddressAdd;
