import classNames from "classnames";
import Link from "next/link";
import {TIcons} from "assets/icons";

export type TAppMainTabRoutes = {link: string; title: string; active: boolean; icon?: TIcons}[];

interface IAppMainTabRoute {
  routes: TAppMainTabRoutes;
  classNameContainer?: string;
  classNameItem?: string;
  classNameItemActive?: string;
  color?: "default" | "supermarket";
}

function AppMainTabRoute(props: IAppMainTabRoute) {
  const {routes, classNameContainer = "", classNameItem = "", classNameItemActive = "", color = "default"} = props;
  const container = classNames({
    "flex w-full items-center h-headerNormal max-width-screen": true,
    [classNameContainer]: classNameContainer,
  });
  return (
    <div className={container}>
      {routes.map((item, index) => {
        const className = classNames({
          "flex items-center justify-center h-[55px] font-medium": true,
          "border-b-2 border-textColor": item.active,
          "text-textColorLight": !item.active,
          "text-textColor": item.active && !classNameItemActive && color === "default",
          "text-primarySupermarket": item.active && !classNameItemActive && color === "supermarket",
          [classNameItem]: classNameItem,
          [`${classNameItemActive}`]: classNameItemActive && item.active,
        });
        const Icon = item?.icon;
        return (
          <Link key={index} className={`${className} flex flex-col`} href={item.link} replace>
            {Icon && <Icon className="w-7 md:w-10 mb-1" fill={item.active ? "#2C3036" : "#7a7d82"} />}
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}

export default AppMainTabRoute;
