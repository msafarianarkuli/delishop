import {useEffect, useMemo} from "react";
import {IconFilter} from "assets/icons";
import {useRouter} from "next/router";
import classNames from "classnames";
import Link from "next/link";
import {AppHeader, AppHeaderBackBtn} from "components";
import {
  setVendorCategoryFilterOpen,
  useVendorCategoryFilterAction,
} from "view/vendorCategory/context/VendorCategoryFilterProvider";
import {useVendorCategoryListData} from "view/vendorCategory/context/VendorCategoryListDataProvider";
import {useVendorCategoryParams} from "view/vendorCategory/context/VendorCategoryParamsProvider";

function VendorCategoryHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 left-0 right-0 header_background">
      <AppHeader
        classNameContainer="border-b border-borderColor"
        left={<VendorCategoryHeaderLeft />}
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
        body={<VendorCategoryHeaderBody />}
        classNameBody="overflow-hidden"
      />
    </div>
  );
}

export default VendorCategoryHeader;

function VendorCategoryHeaderLeft() {
  const dispatch = useVendorCategoryFilterAction();

  return (
    <button onClick={() => dispatch(setVendorCategoryFilterOpen(true))}>
      <IconFilter className="w-8 h-8 text-textColor" />
    </button>
  );
}

function VendorCategoryHeaderBody() {
  const router = useRouter();
  const {data} = useVendorCategoryListData();
  const {vendor, vendorId} = useVendorCategoryParams();

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
          "text-white bg-primary px-3 py-1 rounded-full": +id === item.id,
        });
        return (
          <Link
            key={index}
            href={`/${vendor}/${vendorId}/${item.id}`}
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
