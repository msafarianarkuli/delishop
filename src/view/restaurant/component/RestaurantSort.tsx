import React, {useEffect, useMemo, useRef, useState} from "react";
import {Button} from "antd";
import {IconSort} from "assets/icons";
import RestaurantSortBottomSheet from "view/restaurant/component/RestaurantSortBottomSheet";
import {useRouter} from "next/router";
import usePathnameQuery from "hooks/usePathnameQuery";

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
  {
    title: "ارزان ترین",
    value: "cheapest",
  },
];

function RestaurantSort() {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [sort, setSort] = useState({open: false, title: "", value: ""});
  const {querySearch, pathname} = usePathnameQuery();
  const query = useMemo(() => new URLSearchParams(querySearch), [querySearch]);

  useEffect(() => {
    if (router.isReady && router.query.sort) {
      const value = router.query.sort;
      const item = data.find((item) => item.value === value);
      if (item) {
        setSort({open: false, title: item.title, value: item.value});
      }
    }
  }, [router.isReady, router.query.sort]);

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
      <div className="font-medium text-[15px]">17 رستوران باز</div>
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
          const querySort = router.query.sort;
          if (querySort && !Array.isArray(querySort) && item.value === querySort) {
            setSort((prevState) => ({...prevState, open: false}));
          } else {
            query.set("sort", item.value);
            const url = pathname + "?" + query.toString();
            router.push(url);
          }
        }}
      />
    </div>
  );
}

export default RestaurantSort;
