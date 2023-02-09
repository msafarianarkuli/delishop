import {IconCoin} from "assets/icons";
import styles from "components/appHeader/appHeader.module.scss";
import Link from "next/link";

interface IAppHeaderCoin {
  coin: number;
}

function AppHeaderCoin({coin}: IAppHeaderCoin) {
  return (
    <Link href="/wallet" className={styles.app_header_coin_container}>
      <IconCoin className="w-5 h-5" />
      <div className="text-[15px] font-medium mx-2">{coin}</div>
    </Link>
  );
}

export default AppHeaderCoin;
