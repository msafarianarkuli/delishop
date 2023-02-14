import {useRef, useState} from "react";
import {Button} from "antd";
import {IconSort} from "assets/icons";
import SupermarketSortBottomSheet from "view/supermarket/component/SupermarketSortBottomSheet";

function SupermarketSort() {
  const ref = useRef<HTMLDivElement>(null);
  const [sort, setSort] = useState({open: false, title: ""});

  // useEffect(() => {
  //   const div = ref.current! as HTMLDivElement;
  //
  //   function scroll() {
  //     const scrollPosition = window.scrollY;
  //     if (scrollPosition > 100) {
  //       div.classList.add("h-0");
  //       div.classList.remove("h-[32px]");
  //     } else {
  //       if (div.classList.contains("h-0")) {
  //         div.classList.remove("h-0");
  //         div.classList.add("h-[32px]");
  //       }
  //     }
  //   }
  //
  //   document.addEventListener("scroll", scroll);
  //
  //   return () => document.removeEventListener("scroll", scroll);
  // }, []);

  return (
    <div
      ref={ref}
      className="flex items-center justify-between h-[32px] overflow-hidden transition-height max-width-screen"
    >
      <div className="font-medium text-[15px] text-iconColor">17 سوپرمارکت اطراف شما</div>
      <Button
        onClick={() => setSort((prevState) => ({...prevState, open: true}))}
        icon={<IconSort className="w-5 h-auto ml-1" />}
        className="supermarket_btn flex items-center text-primarySupermarket border-0 shadow-none"
      >
        {sort.title || "به ترتیب..."}
      </Button>
      <SupermarketSortBottomSheet
        open={sort.open}
        onClose={() => setSort((prevState) => ({...prevState, open: false}))}
        onClick={(value) => {
          setSort({open: false, title: value.title});
        }}
      />
    </div>
  );
}

export default SupermarketSort;
