import classNames from "classnames";
import {useSupermarketCategoryListData} from "view/supermarketCategory/context/SupermarketCategoryListDataProvider";
import {useMemo} from "react";
import {useRouter} from "next/router";
import {IGetSupermarketDetailMenusGroups} from "types/interfaceSupermarketDetail";

type TDate = IGetSupermarketDetailMenusGroups | null | undefined;

function SupermarketCategorySubCategory() {
  const {data: categoryList} = useSupermarketCategoryListData();
  const router = useRouter();

  const categoryId = useMemo(() => {
    const id = router.query.category;
    if (id && !Array.isArray(id)) {
      return +id;
    }
    return 0;
  }, [router.query.category]);

  const data: TDate = useMemo(() => {
    if (categoryId) {
      return categoryList?.menus.groups.find((item) => item.id === categoryId);
    }
    return null;
  }, [categoryId, categoryList?.menus.groups]);

  const allFilter = classNames({
    "border rounded-full font-medium text-[15px] py-1 px-3 ml-3 whitespace-nowrap": true,
    "border-primarySupermarket bg-primarySupermarket/10 text-primarySupermarket": true,
  });

  return (
    <div className="flex items-center h-headerNormal border-b border-borderColor overflow-auto pr-screenSpace">
      <div className={allFilter}>همه</div>
      {data?.sub_groups?.map((item, index) => {
        const container = classNames({
          "border rounded-full font-medium text-[15px] py-1 px-3 ml-3 whitespace-nowrap": true,
          "border-iconColor text-iconColor": true,
          // "border-primarySupermarket bg-primarySupermarket/10 text-primarySupermarket": index === 0,
        });
        return (
          <div key={index} className={container}>
            {item.displayname}
          </div>
        );
      })}
    </div>
  );
}

export default SupermarketCategorySubCategory;
