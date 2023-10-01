import {useCallback, useEffect, useMemo, useState} from "react";
import {IGetVendorDetailMenusGroups} from "types/interfaceVendorDetail";
import classNames from "classnames";
import {useVendorDetailRestaurantData} from "view/vendorDetail/vendorDetailRestaurant/context/VendorDetailRestaurantDataProvider";
import styles from "view/vendorDetail/vendorDetailRestaurant/VendorDetailRestaurant.module.scss";

const initialIndex = 0;

function VendorDetailRestaurantTab() {
  const [active, setActive] = useState(initialIndex);
  const {data: res} = useVendorDetailRestaurantData();
  const data = useMemo(() => {
    const tmp: IGetVendorDetailMenusGroups[] = [];
    if (res?.menus?.groups?.length) {
      for (const item of res.menus.groups) {
        if (item.products.length) {
          tmp.push(item);
        }
      }
    }
    return tmp;
  }, [res?.menus?.groups]);

  useEffect(() => {
    let index = initialIndex;
    const deviceHeight = window.innerHeight;

    function scroll() {
      const percent: any[] = [];
      data?.forEach((item) => {
        const element = document.getElementById(item.name) as HTMLDivElement;
        const tmpHeight = element.getBoundingClientRect().top;
        const tmpPercent = (tmpHeight / deviceHeight) * 100;
        // console.log("percent", tmpHeight, tmpPercent);
        let finalPercent = tmpPercent;
        if (tmpPercent > 0) {
          finalPercent = 80 - tmpPercent;
        }
        // console.log("percent", tmpHeight, tmpPercent);
        percent.push({
          ...item,
          percent: finalPercent,
        });
      });
      const positive = percent.filter((item) => item.percent >= 0);
      const numbers: number[] = [];
      positive.forEach((item) => numbers.push(item.percent));
      const finalItem = positive.find((item) => item.percent === Math.min(...numbers));
      // console.log("finalItem", finalItem);
      let tmpIndex: number | undefined;
      if (finalItem) {
        tmpIndex = data?.findIndex((item) => item.id === finalItem.id) || 0;
        if (index !== tmpIndex) setActive(tmpIndex);
        index = tmpIndex;
      }
      // console.log("tmpIndex", tmpIndex);
      // console.log("index", index);
      // setActive(index);
    }

    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [data]);

  const onClick = useCallback((id: string) => {
    const tab = document.getElementById("restaurantDetailTab") as HTMLDivElement;
    const element = document.getElementById(id) as HTMLDivElement;
    const top = element.getBoundingClientRect().top;
    const body = document.body.getBoundingClientRect().top;
    // console.log("top", top);
    // console.log("body", body);
    const tabHeight = 70;
    const headerHeight = 56;
    let offset = 15;
    if (tab.classList.contains(styles.vendor_detail_restaurant_tab_fixed)) {
      offset += tabHeight + headerHeight;
    } else if (!tab.classList.contains(styles.vendor_detail_restaurant_tab_fixed)) {
      offset += tabHeight * 2 + tabHeight;
    }
    const final = top - body - offset;
    // console.log("final", final);
    window.scrollTo({top: final, behavior: "smooth"});
  }, []);

  return (
    <div
      id="restaurantDetailTab"
      className="flex items-center flex-nowrap overflow-auto h-[70px] px-screenSpace max-width-screen"
    >
      {data?.map((item, index) => {
        const className = classNames({
          "relative text-[15px] font-semibold ml-5 last:ml-0 whitespace-nowrap": true,
          "after:content-[' '] after:absolute after:bottom-[-3px] after:right-1/3 text-primary after:h-[2px] after:w-1/3 after:bg-primary after:rounded-full":
            index == active,
        });
        return (
          <div onClick={() => onClick(item.name)} key={index} className={className}>
            {item.displayname}
          </div>
        );
      })}
    </div>
  );
}

export default VendorDetailRestaurantTab;
