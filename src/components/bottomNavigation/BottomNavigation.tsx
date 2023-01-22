import {IconCart, IconHome, IconSearch} from "assets/icons";
import classNames from "classnames";

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
    icon: IconCart,
    title: "سفارشات",
  },
];

function BottomNavigation() {
  return (
    <div className="fixed flex items-center justify-around bottom-0 right-0 left-0 h-bottomNavigation bg-[#E1E2E8]">
      {data.map((item, index) => {
        const icon = classNames({
          "w-6 h-6": true,
          "text-primary": index === 0,
        });
        const Icon = item.icon;
        return (
          <div key={index} className="flex flex-col items-center">
            <Icon className={icon} />
            <div className="text-[13px] mt-1">{item.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default BottomNavigation;
