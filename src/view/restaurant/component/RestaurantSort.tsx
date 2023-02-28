import React, {useEffect, useMemo, useRef, useState} from "react";
import {Button} from "antd";
import {IconSort} from "assets/icons";
import RestaurantSortBottomSheet from "view/restaurant/component/RestaurantSortBottomSheet";
import {useRouter} from "next/router";
import usePathnameQuery from "hooks/usePathnameQuery";
import RestaurantOpen from "view/restaurant/component/RestaurantOpen";
import {restaurantSortQuery} from "view/restaurant/context/RestaurantDataProvider";

const data = [
  {
    title: "بالاترین سکه",
    value: "point",
  },
  {
    title: "نزدیک ترین",
    value: "closest",
  },
  {
    title: "جدید ترین",
    value: "new",
  },
];

const initialValue = {
  open: false,
  title: "",
  value: "",
};
function RestaurantSort() {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [sort, setSort] = useState(initialValue);
  const {querySearch, pathname} = usePathnameQuery();
  const query = useMemo(() => new URLSearchParams(querySearch), [querySearch]);

  useEffect(() => {
    if (router.isReady && query.get(restaurantSortQuery)) {
      const value = query.get(restaurantSortQuery);
      const item = data.find((item) => item.value === value);
      if (item) {
        setSort({open: false, title: item.title, value: item.value});
      }
    }
  }, [query, router.isReady]);

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
      className="flex items-center justify-between px-screenSpace h-[32px] overflow-hidden transition-height max-width-screen"
    >
      <RestaurantOpen />
      <Button
        onClick={() => setSort((prevState) => ({...prevState, open: true}))}
        icon={<IconSort className="w-5 h-auto ml-1" />}
        className="flex items-center text-primary border-0 shadow-none"
      >
        {sort.title || "به ترتیب..."}
      </Button>
      <RestaurantSortBottomSheet
        open={sort.open}
        onClose={() => setSort((prevState) => ({...prevState, open: false}))}
        data={data}
        onClick={(item) => {
          const querySort = query.get(restaurantSortQuery);
          if (querySort && !Array.isArray(querySort) && item.value === querySort) {
            query.delete(restaurantSortQuery);
            setSort(initialValue);
          } else {
            query.set(restaurantSortQuery, item.value);
          }
          const finalQuery = query.toString() ? "?" + query.toString() : "";
          const url = pathname + finalQuery;
          router.push(url);
        }}
      />
    </div>
  );
}

export default RestaurantSort;
