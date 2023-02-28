import React, {useCallback, useEffect, useMemo, useState} from "react";
import RestaurantCategory from "view/restaurant/component/RestaurantCategory";
import RestaurantFilterBtn from "view/restaurant/component/RestaurantFilterBtn";
import RestaurantFilterBottomSheet from "view/restaurant/component/RestaurantFilterBottomSheet";
import {useQuery} from "react-query";
import getVendorsTags, {VENDORS_TAGS_KEY} from "api/getVendorsTags";
import usePathnameQuery from "hooks/usePathnameQuery";
import {useRouter} from "next/router";
import {restaurantTagQuery} from "view/restaurant/context/RestaurantDataProvider";

// export const restaurantTagQuery = "tag[]";
// const defaultTags = ["کباب", "ایرانی", "دارای سکه"];
const defaultTags = ["فست فود"];

function RestaurantFilter() {
  const router = useRouter();
  const [bottomSheet, setBottomSheet] = useState(false);
  const {data = []} = useQuery(VENDORS_TAGS_KEY, () => getVendorsTags(), {staleTime: Infinity});
  const {pathname, querySearch} = usePathnameQuery();
  const query = useMemo(() => new URLSearchParams(querySearch), [querySearch]);
  const allTagValues = useMemo(() => query.getAll(restaurantTagQuery), [query]);

  const selectedFilter = useMemo(() => {
    return data.filter((item) => allTagValues.includes(item.id.toString()) && !defaultTags.includes(item.displayname));
  }, [allTagValues, data]);

  const constTags = useMemo(() => {
    return data.filter((item) => defaultTags.includes(item.displayname));
  }, [data]);

  useEffect(() => {
    setBottomSheet(false);
  }, [router.asPath]);

  const onRemove = useCallback(
    (id: string) => {
      query.delete(restaurantTagQuery);
      const tmp = allTagValues.filter((value) => id !== value);
      tmp.forEach((value) => {
        query.append(restaurantTagQuery, value);
      });
    },
    [allTagValues, query]
  );

  const onAdd = useCallback(
    (id: string) => {
      query.append(restaurantTagQuery, id);
    },
    [query]
  );

  const push = useCallback(() => {
    const finalQuery = query.toString() ? "?" + query.toString() : "";
    const url = pathname + finalQuery;
    router.push(url);
  }, [pathname, query, router]);

  const bottomSheetOnClick = useCallback(
    (id: string) => {
      if (allTagValues.some((value) => id === value)) {
        onRemove(id);
      } else {
        onAdd(id);
      }
      push();
    },
    [allTagValues, onAdd, onRemove, push]
  );

  return (
    <>
      <div className="flex items-center px-screenSpace max-width-screen">
        <RestaurantCategory count={allTagValues.length} onClick={() => setBottomSheet(true)} />
        <div className="flex flex-1 flex-nowrap overflow-auto py-5 px-2">
          {constTags.map((item) => {
            return (
              <RestaurantFilterBtn
                key={item.id}
                title={item.displayname}
                selected={allTagValues.includes(item.id.toString())}
                onClick={() => {
                  bottomSheetOnClick(item.id.toString());
                }}
              />
            );
          })}
          {selectedFilter.map((item) => {
            return (
              <RestaurantFilterBtn
                selected
                key={item.id}
                title={item.displayname}
                onClick={() => {
                  console.log("click");
                  onRemove(item.id.toString());
                  push();
                }}
              />
            );
          })}
        </div>
      </div>
      <RestaurantFilterBottomSheet
        open={bottomSheet}
        onClose={() => setBottomSheet(false)}
        onClick={(item) => {
          bottomSheetOnClick(item.id.toString());
        }}
        data={data}
      />
    </>
  );
}

export default RestaurantFilter;
