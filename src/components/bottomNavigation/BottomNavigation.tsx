import {TIcons} from "assets/icons";
import classNames from "classnames";
import styles from "components/bottomNavigation/bottomNavigation.module.scss";
import {ElementType, useMemo} from "react";
import Link from "next/link";

interface IDataBottomNavigationitem {
  icon: TIcons;
  title: string;
  link?: string;
  active: boolean;
  onClick?: () => void;
  badge?: boolean;
}

export type TDataBottomNavigation = IDataBottomNavigationitem[];

interface IBottomNavigation {
  data: TDataBottomNavigation;
  primary?: "restaurant" | "supermarket";
}

function BottomNavigation(props: IBottomNavigation) {
  const {data, primary = "restaurant"} = props;
  const primaryColor = useMemo(() => {
    let color = "";
    if (primary === "restaurant") color = "text-primary";
    if (primary === "supermarket") color = "text-primarySupermarket";
    return color;
  }, [primary]);

  const container = classNames({
    "h-bottomNavigation max-width-screen": true,
    [styles.bottom_navigation_container]: true,
    [styles.bottom_navigation_container_restaurant]: primary === "restaurant",
    [styles.bottom_navigation_container_supermarket]: primary === "supermarket",
  });

  return (
    <div className="fixed bottom-0 right-0 left-0">
      <div className={container}>
        {data.map((item, index) => {
          const icon = classNames({
            "w-7 h-7": true,
            "text-primary": item.active,
          });
          const text = classNames({
            "font-medium text-[13px] mt-1": true,
            [primaryColor]: item.active,
          });
          const Icon = item.icon;
          const className = "relative flex flex-col items-center";
          const Component: ElementType = item.link ? Link : "button";
          return (
            <Component key={index} {...(item.link ? {href: item.link} : {onClick: item.onClick})} className={className}>
              {item.badge ? (
                <div className="absolute w-[7px] h-[7px] rounded-full bg-primary top-[2%] right-[25%]" />
              ) : null}
              <Icon className={icon} />
              <div className={text}>{item.title}</div>
            </Component>
          );
        })}
      </div>
    </div>
  );
}

export default BottomNavigation;
