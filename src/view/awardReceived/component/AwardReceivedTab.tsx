import AppTabRoute, {TAppTabRoutes} from "components/appTabRoute/AppTabRoute";
import styles from "view/awardReceived/awardReceived.module.scss";

const routes: TAppTabRoutes = [
  {
    link: "/wallet",
    title: "کیف پول",
    active: false,
  },
  {
    link: "/awardreceived",
    title: "جایزه دریافتی",
    active: true,
  },
  {
    link: "/history",
    title: "آمار گنجینه",
    active: false,
  },
];

function AwardReceivedTab() {
  return (
    <div className={styles.award_received_tab}>
      <AppTabRoute routes={routes} classNameContainer="px-screenSpace" classNameItem="w-1/3" />
    </div>
  );
}

export default AwardReceivedTab;
