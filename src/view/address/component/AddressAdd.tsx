import styles from "view/address/address.module.scss";
import {IconAddAddress} from "assets/icons";
import Link from "next/link";
import classNames from "classnames";
import useTypeColor from "hooks/useTypeColor";
import useQuerySearchClient from "hooks/useQuerySearchClient";

function AddressAdd() {
  const type = useTypeColor();
  const query = useQuerySearchClient();

  const container = classNames({
    [styles.address_add]: true,
    "border-primary": type === "default",
    "border-primarySupermarket": type === "supermarket",
  });

  return (
    <Link href={`/address/create${query}`} className={container}>
      <IconAddAddress className="w-[18px] h-[18px]" />
      <div className="mr-2">افزودن آدرس جدید</div>
    </Link>
  );
}

export default AddressAdd;
