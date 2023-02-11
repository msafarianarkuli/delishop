import classNames from "classnames";
import {useCallback, useEffect, useState} from "react";
import styles from "view/restaurantDetail/restaurantDetail.module.scss";

const data = [
  {
    title: "پر طرفدارها",
    id: "restaurantDetailMost",
  },
  {
    title: "تک نفره",
    id: "restaurantDetailPerson",
  },
  {
    title: "خانواده",
    id: "restaurantDetailFamily",
  },
];

const initialIndex = 0;

function RestaurantDetailTab() {
  const [active, setActive] = useState(initialIndex);
  useEffect(() => {
    let index = initialIndex;
    // const ids: string[] = [];
    const deviceHeight = window.innerHeight;
    // for (const item of data) {
    //   if (item.id) ids.push(item.id);
    // }

    function scroll() {
      const percent: any[] = [];
      data.forEach((item) => {
        const element = document.getElementById(item.id) as HTMLDivElement;
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
        tmpIndex = data.findIndex((item) => item.id === finalItem.id);
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
  }, []);

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
    if (tab.classList.contains(styles.restaurant_detail_tab_fixed)) {
      offset += tabHeight + headerHeight;
    } else if (!tab.classList.contains(styles.restaurant_detail_tab_fixed)) {
      offset += tabHeight * 2 + tabHeight;
    }
    const final = top - body - offset;
    console.log("final", final);
    window.scrollTo({top: final});
  }, []);

  return (
    <div
      id="restaurantDetailTab"
      className="flex items-center flex-nowrap overflow-auto h-[70px] px-screenSpace max-width-screen"
    >
      {data.map((item, index) => {
        const className = classNames({
          "relative text-[15px] font-semibold ml-5 last:ml-0 whitespace-nowrap": true,
          "after:content-[' '] after:absolute after:bottom-[-3px] after:right-1/3 after:h-[2px] after:w-1/3 after:bg-primary after:rounded-full":
            index == active,
        });
        return (
          <div onClick={() => onClick(item.id)} key={index} className={className}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantDetailTab;
