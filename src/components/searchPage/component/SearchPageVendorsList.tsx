import React, {useEffect} from "react";
import {useSearchPageData} from "components/searchPage/context/SearchPageDataProvider";
import SearchPageVendorCard from "components/searchPage/component/SearchPageVendorCard";
import Link from "next/link";
import {useInView} from "react-intersection-observer";

function SearchPageVendorsList() {
  const {data, fetchNextPage} = useSearchPageData();
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView && data?.pages[0].products_suggest.totalCount === 0) {
      fetchNextPage();
    }
  }, [data?.pages, fetchNextPage, inView]);

  return (
    <div>
      {data?.pages.map((value, index, array) => {
        return value.vendors_suggest.vendors.map((item, idx, arr) => {
          let url = "";
          if (item.vendor_category_id === 1) {
            url = `/restaurant/${item.id}`;
          } else if (item.vendor_category_id === 2) {
            url = `/supermarket/${item.id}`;
          }
          const condition = array.length - 1 === index && arr.length - 1 === idx;
          const tmpRef = condition ? ref : null;
          return (
            <Link ref={tmpRef} key={item.id} href={url} prefetch={false}>
              <SearchPageVendorCard title={item.name} />
            </Link>
          );
        });
      })}
    </div>
  );
}

export default SearchPageVendorsList;
