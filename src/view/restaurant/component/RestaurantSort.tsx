import React, {useEffect, useRef} from "react";
import {Button} from "antd";
import {IconSort} from "assets/icons";

function RestaurantSort() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = ref.current! as HTMLDivElement;
    function scroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        div.classList.add("h-0");
        div.classList.remove("h-[32px]");
      } else {
        if (div.classList.contains("h-0")) {
          div.classList.remove("h-0");
          div.classList.add("h-[32px]");
        }
      }
    }

    document.addEventListener("scroll", scroll);

    return () => document.removeEventListener("scroll", scroll);
  }, []);

  return (
    <div
      ref={ref}
      className="flex items-center justify-between px-screenSpace h-[32px] overflow-hidden transition-height"
    >
      <div className="font-medium">17 رستوران باز</div>
      <Button
        icon={<IconSort className="w-5 h-auto ml-1" />}
        className="flex items-center text-primary border-0 shadow-none"
      >
        به ترتیب...
      </Button>
    </div>
  );
}

export default RestaurantSort;
