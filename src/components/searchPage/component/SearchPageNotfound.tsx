import {useSearchPageData} from "components/searchPage/context/SearchPageDataProvider";
import {useMemo} from "react";
import usePathnameQuery from "hooks/usePathnameQuery";
import {useRouter} from "next/router";

function SearchPageNotfound() {
  const {data, isLoading, isFetching} = useSearchPageData();
  const {querySearch} = usePathnameQuery();
  const vendors = data?.pages[0].vendors_suggest.vendors.length;
  const products = data?.pages[0].products_suggest.products.length;
  const query = useMemo(() => new URLSearchParams(querySearch), [querySearch]);
  const router = useRouter();

  if (router.isReady) {
    if (!vendors && !products && !isLoading && !isFetching) {
      if (query.has("name")) {
        return <div>موردی یافت نشد</div>;
      }
      return <div>کلمه مورد نظر خود را جستجو کنید</div>;
    }
  }
  return null;
}

export default SearchPageNotfound;
