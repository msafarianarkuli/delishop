import React, {useEffect} from "react";
import {AppHeader, AppHeaderBackBtn} from "components";
import {useRouter} from "next/router";
import {IconFilter} from "assets/icons";
import classNames from "classnames";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "دستمال و شوینده",
  },
  {
    id: 2,
    title: "لبنیات",
  },
  {
    id: 3,
    title: "خواربار و نان",
  },
  {
    id: 4,
    title: "آرایشی و بهداشتی",
  },
  {
    id: 5,
    title: "میوه و سبزیجات",
  },
  {
    id: 6,
    title: "نوشیدنی ها",
  },
];

function SupermarketCategoryHeaderBody() {
  const router = useRouter();

  useEffect(() => {
    const id = router.query?.id as string;
    if (id) {
      const div = document.getElementById(`category_${id}`) as HTMLDivElement;
      div.scrollIntoView();
    }
  }, [router.query?.id]);

  return (
    <div className="w-full flex items-center overflow-auto">
      {data.map((item, index) => {
        const id = router.query?.id as string;
        const container = classNames({
          "block font-medium text-[15px] text-iconColor ml-4 last:mr-0 whitespace-nowrap": true,
          "text-white bg-primarySupermarket px-3 py-1 rounded-full": +id === item.id,
        });
        return (
          <Link key={index} href={`/supermarket/category/${item.id}`} id={`category_${item.id}`} className={container}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}

function SupermarketCategoryHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 left-0 right-0 header_background">
      <AppHeader
        classNameContainer="border-b border-borderColor"
        left={
          <button>
            <IconFilter className="w-8 h-8 text-textColor" />
          </button>
        }
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
        body={<SupermarketCategoryHeaderBody />}
        classNameBody="overflow-hidden"
      />
    </div>
  );
}

export default SupermarketCategoryHeader;
