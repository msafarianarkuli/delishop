import {useRouter} from "next/router";
import {useCallback, useEffect, useMemo, useState} from "react";
import {useQuery} from "react-query";
import getVendorsTags, {VENDORS_TAGS_KEY} from "api/getVendorsTags";
import usePathnameQuery from "hooks/usePathnameQuery";
import classNames from "classnames";
import VendorCategory from "view/vendor/component/VendorCategory";
import VendorFilterBtn from "view/vendor/component/VendorFilterBtn";
import VendorFilterBottomSheet from "view/vendor/component/VendorFilterBottomSheet";
import {ReactQueryKey} from "utils/Const";

const defaultTags = ["کباب", "ایرانی", "دارای سکه"];

// const defaultTags = ["فست فود"];

function VendorFilter() {
  const router = useRouter();
  const [bottomSheet, setBottomSheet] = useState(false);
  const {data = []} = useQuery(VENDORS_TAGS_KEY, () => getVendorsTags(), {staleTime: Infinity});
  const {pathname, querySearch} = usePathnameQuery();
  const query = useMemo(() => new URLSearchParams(querySearch), [querySearch]);
  const allTagValues = useMemo(() => query.getAll(ReactQueryKey.VENDOR_FILTER_TAGE), [query]);

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
      query.delete(ReactQueryKey.VENDOR_FILTER_TAGE);
      const tmp = allTagValues.filter((value) => id !== value);
      tmp.forEach((value) => {
        query.append(ReactQueryKey.VENDOR_FILTER_TAGE, value);
      });
    },
    [allTagValues, query]
  );

  const onAdd = useCallback(
    (id: string) => {
      query.append(ReactQueryKey.VENDOR_FILTER_TAGE, id);
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

  const containerClassName = classNames({
    "flex items-center px-screenSpace max-width-screen": true,
    "py-4": !constTags.length && !selectedFilter.length,
  });

  return (
    <>
      <div className={containerClassName}>
        <VendorCategory count={allTagValues.length} onClick={() => setBottomSheet(true)} />
        <div className="flex flex-1 flex-nowrap overflow-auto px-2 py-5">
          {constTags.map((item) => {
            return (
              <VendorFilterBtn
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
              <VendorFilterBtn
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
      <VendorFilterBottomSheet
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

export default VendorFilter;
