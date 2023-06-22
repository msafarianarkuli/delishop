import {useRouter} from "next/router";
import {useMemo} from "react";
import classNames from "classnames";
import {useVendorCategoryListData} from "view/vendorCategory/context/VendorCategoryListDataProvider";
import {
  useVendorCategorySubcategoryFilter,
  useVendorCategorySubcategoryFilterAction,
} from "view/vendorCategory/context/VendorCategorySubcategoryFilterProvider";
import {
  IGetSupermarketDetailMenusGroupsSubgroupsItems,
  TGetSupermarketDetailMenusGroupsSubgroups,
} from "types/interfaceSupermarketDetail";

type TDate = TGetSupermarketDetailMenusGroupsSubgroups | null | undefined;

const allItem: IGetSupermarketDetailMenusGroupsSubgroupsItems = {
  displayname: "همه",
  id: 0,
  sub_groups: null,
  market: 0,
  name: "",
  mothergroup_fid: 0,
};

function VendorCategorySubcategory() {
  const {data: categoryList} = useVendorCategoryListData();
  const filterId = useVendorCategorySubcategoryFilter();
  const setFilterId = useVendorCategorySubcategoryFilterAction();
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
      const tmp = categoryList?.menus.groups.find((item) => item.id === categoryId);
      if (tmp?.sub_groups?.length) {
        return [allItem, ...tmp.sub_groups];
      }
    }
    return null;
  }, [categoryId, categoryList?.menus.groups]);

  if (!data?.length) return null;
  return (
    <div className="flex items-center h-headerNormal border-b border-borderColor overflow-auto pr-screenSpace">
      {data?.map((item, index) => {
        const container = classNames({
          "border rounded-full font-medium text-[15px] py-1 px-3 ml-3 whitespace-nowrap cursor-pointer": true,
          "border-iconColor text-iconColor": item.id !== filterId,
          "border-primary bg-primary/10 text-primary": item.id === filterId,
        });
        return (
          <div onClick={() => setFilterId(item.id)} key={index} className={container}>
            {item.displayname}
          </div>
        );
      })}
    </div>
  );
}

export default VendorCategorySubcategory;
