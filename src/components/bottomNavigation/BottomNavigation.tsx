import {TIcons} from "assets/icons";
import classNames from "classnames";
import styles from "components/bottomNavigation/bottomNavigation.module.scss";
import Link from "next/link";

interface IDataBottomNavigationitem {
  icon: TIcons;
  title: string;
  link: string;
}

export type TDataBottomNavigation = IDataBottomNavigationitem[];

interface IBottomNavigation {
  data: TDataBottomNavigation;
}

function BottomNavigation({data}: IBottomNavigation) {
  return (
    <div className="fixed bottom-0 right-0 left-0">
      <div className={`${styles.bottom_navigation_container} h-bottomNavigation max-width-screen`}>
        {data.map((item, index) => {
          const icon = classNames({
            "w-7 h-7": true,
            "text-primary": index === 0,
          });
          const Icon = item.icon;
          return (
            <Link key={index} href={item.link} className="flex flex-col items-center">
              <Icon className={icon} />
              <div className="font-medium text-[13px] mt-1">{item.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BottomNavigation;
