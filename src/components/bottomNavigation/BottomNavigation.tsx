import {IconCart, IconHome, IconOrder, IconSearch} from "assets/icons";
import classNames from "classnames";
import styles from "components/bottomNavigation/bottomNavigation.module.scss";

const data = [
  {
    icon: IconHome,
    title: "خانه",
  },
  {
    icon: IconCart,
    title: "سبد خرید",
  },
  {
    icon: IconSearch,
    title: "جستجو",
  },
  {
    icon: IconOrder,
    title: "سفارشات",
  },
];

function BottomNavigation() {
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
            <div key={index} className="flex flex-col items-center">
              <Icon className={icon} />
              <div className="font-medium text-[13px] mt-1">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BottomNavigation;
