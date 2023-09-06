import {useEffect, useMemo, useRef, useState} from "react";
import {useRouter} from "next/router";
import usePathnameQuery from "hooks/usePathnameQuery";
import {Button} from "antd";
import {IconSort} from "assets/icons";
import VendorOpen from "view/vendor/component/VendorOpen";
import VendorSortBottomSheet from "view/vendor/component/VendorSortBottomSheet";
import {ReactQueryKey} from "utils/Const";

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

function VendorSort() {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [sort, setSort] = useState(initialValue);
  const {querySearch, pathname} = usePathnameQuery();

  const query = useMemo(() => new URLSearchParams(querySearch), [querySearch]);
  // const vendorType = useVendorType();
  useEffect(() => {
    if (router.isReady && query.get(ReactQueryKey.VENDOR_FILTER_SORT)) {
      const value = query.get(ReactQueryKey.VENDOR_FILTER_SORT);
      const item = data.find((item) => item.value === value);
      if (item) {
        setSort({open: false, title: item.title, value: item.value});
      }
    }
  }, [query, router.isReady]);

  useEffect(() => {
    router.replace(pathname + "?sort=closest");
    setSort((prevState) => ({...prevState, title: "نزدیک ترین", value: "closest"}));
  }, []);

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

  // console.log("vendorType?.isSupermarket", vendorType?.isSupermarket);
  // const btnClassName = classNames({
  //   "flex items-center border-0 shadow-none": true,
  //   "text-primary": vendorType?.isRestaurant,
  //   "text-primarySupermarket": vendorType?.isSupermarket,
  // });

  return (
    <div
      ref={ref}
      className="flex items-center justify-between px-screenSpace h-[32px] overflow-hidden transition-height max-width-screen"
    >
      <VendorOpen />
      <Button
        onClick={() => setSort((prevState) => ({...prevState, open: true}))}
        icon={<IconSort className="w-5 h-auto ml-1" />}
        className="flex items-center border-0 shadow-none text-primary"
      >
        {sort.title || "به ترتیب..."}
      </Button>
      <VendorSortBottomSheet
        open={sort.open}
        onClose={() => setSort((prevState) => ({...prevState, open: false}))}
        data={data}
        onClick={(item) => {
          const querySort = query.get(ReactQueryKey.VENDOR_FILTER_SORT);
          if (querySort && !Array.isArray(querySort) && item.value === querySort) {
            query.delete(ReactQueryKey.VENDOR_FILTER_SORT);
            setSort(initialValue);
          } else {
            query.set(ReactQueryKey.VENDOR_FILTER_SORT, item.value);
          }
          const finalQuery = query.toString() ? "?" + query.toString() : "";
          const url = pathname + finalQuery;
          router.push(url);
        }}
      />
    </div>
  );
}

export default VendorSort;
