import styles from "view/address/address.module.scss";
import {IconAddAddress} from "assets/icons";
import Link from "next/link";

function AddressAdd() {
  return (
    <Link href="/address/create" className={styles.address_add}>
      <IconAddAddress className="w-[18px] h-[18px]" />
      <div className="mr-2">افزودن آدرس جدید</div>
    </Link>
  );
}

export default AddressAdd;
