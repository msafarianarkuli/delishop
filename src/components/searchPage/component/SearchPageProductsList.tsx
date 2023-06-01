import React, {useEffect} from "react";
import {useSearchPageData} from "components/searchPage/context/SearchPageDataProvider";
import SearchPageProductCard from "components/searchPage/component/SearchPageProductCard";
import Link from "next/link";
import {useInView} from "react-intersection-observer";

function SearchPageProductsList() {
  const {data, fetchNextPage} = useSearchPageData();
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div>
      {data?.pages.map((value, index, array) => {
        return value.products_suggest.products.map((item, idx, arr) => {
          if (!item.productKinds.length) return null;
          const product = item.productKinds[0];
          const price = product?.price_num || 0;
          const addedPercent = item.priceClass / 100;
          const finalPrice = price + price * addedPercent;
          let url = "";
          if (item.vendor.vendor_category_id === 1) {
            url = `/restaurant/product/${item.id}`;
          } else if (item.vendor.vendor_category_id === 2) {
            url = `/supermarket/product/${item.id}`;
          }
          const condition = array.length - 1 === index && arr.length - 1 === idx;
          const tmpRef = condition ? ref : null;
          return (
            <Link ref={tmpRef} key={item.id} href={url} prefetch={false}>
              <SearchPageProductCard
                title={item.displayname}
                name={item.vendor.name}
                price={finalPrice}
                image={product.photo_igu}
              />
            </Link>
          );
        });
      })}
    </div>
  );
}

export default SearchPageProductsList;
