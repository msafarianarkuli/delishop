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
      <div className="font-medium mx-2">{coin}</div>
      <div className="text-[13px] font-light">سکه</div>
    </Link>
  );
}

export default AppHeaderCoin;
