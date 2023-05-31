import React, {useEffect, useMemo} from "react";
import {AppHeader, AppHeaderBackBtn} from "components";
import {useRouter} from "next/router";
import {IconFilter} from "assets/icons";
import classNames from "classnames";
import Link from "next/link";
import useSupermarketCategoryFilterAction from "view/supermarketCategory/component/context/useSupermarketCategoryFilterAction";
import {setSupermarketCategoryFilterOpen} from "view/supermarketCategory/component/context/SupermarketCategoryFilterProvider";
import {useSupermarketCategoryListData} from "view/supermarketCategory/context/SupermarketCategoryListDataProvider";

function SupermarketCategoryHeaderBody() {
  const router = useRouter();
  const {data} = useSupermarketCategoryListData();

  const id = useMemo(() => {
    const tmpId = router.query.category;
    if (tmpId && !Array.isArray(tmpId)) {
      return tmpId;
    }
    return "";
  }, [router.query.category]);

  useEffect(() => {
    if (id) {
      const div = document.getElementById(`category_${id}`) as HTMLDivElement;
      div?.scrollIntoView();
    }
  }, [id]);

  if (!data?.menus.groups.length) return <div>موردی یافت نشد</div>;
  return (
    <div className="w-full flex items-center overflow-auto h-headerNormal">
      {data?.menus.groups.map((item, index) => {
        const container = classNames({
          "block font-medium text-[15px] text-iconColor ml-4 last:mr-0 whitespace-nowrap": true,
          "text-white bg-primarySupermarket px-3 py-1 rounded-full": +id === item.id,
        });
        return (
          <Link
            key={index}
            href={`/supermarket/${data?.vendor.id}/${item.id}`}
            id={`category_${item.id}`}
            className={container}
            prefetch={false}
            replace
          >
            {item.displayname}
          </Link>
        );
      })}
    </div>
  );
}

function SupermarketCategoryHeaderLeft() {
  const dispatch = useSupermarketCategoryFilterAction();

  return (
    <button onClick={() => dispatch(setSupermarketCategoryFilterOpen(true))}>
      <IconFilter className="w-8 h-8 text-textColor" />
    </button>
  );
}

function SupermarketCategoryHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 left-0 right-0 header_background">
      <AppHeader
        classNameContainer="border-b border-borderColor"
        left={<SupermarketCategoryHeaderLeft />}
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
        body={<SupermarketCategoryHeaderBody />}
        classNameBody="overflow-hidden"
      />
    </div>
  );
}

export default SupermarketCategoryHeader;
