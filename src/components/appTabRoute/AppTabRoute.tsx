import classNames from "classnames";
import Link from "next/link";
import styles from "components/appTabRoute/appTabRoute.module.scss";

export type TAppTabRoutes = {link: string; title: string; active: boolean}[];

interface IAppTabRoute {
  routes: TAppTabRoutes;
  classNameContainer?: string;
  classNameItem?: string;
  classNameItemActive?: string;
}

function AppTabRoute(props: IAppTabRoute) {
  const {routes, classNameContainer = "", classNameItem = "", classNameItemActive = ""} = props;
  const container = classNames({
    "flex w-full items-center h-headerNormal max-width-screen": true,
    [classNameContainer]: classNameContainer,
  });
  return (
    <div className={container}>
      {routes.map((item, index) => {
        const className = classNames({
          "flex items-center justify-center h-[40px] rounded-full font-medium": true,
          [styles.app_tab_route_active]: item.active,
          "text-textColorLight": !item.active,
          "text-primary": item.active && !classNameItemActive,
          [classNameItem]: classNameItem,
          [classNameItemActive]: classNameItemActive && item.active,
        });
        return (
          <Link key={index} className={className} href={item.link} replace>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}

export default AppTabRoute;
