import {useSearchPageData} from "components/searchPage/context/SearchPageDataProvider";
import SearchPageVendorCard from "components/searchPage/component/SearchPageVendorCard";
import Link from "next/link";

function SearchPageVendorsList() {
  const {data} = useSearchPageData();

  return (
    <div>
      {data?.vendors_suggest.vendors.map((item) => {
        let url = "";
        if (item.vendor_category_id === 1) {
          url = `/restaurant/${item.id}`;
        } else if (item.vendor_category_id === 2) {
          url = `/supermarket/${item.id}`;
        }
        return (
          <Link key={item.id} href={url} prefetch={false}>
            <SearchPageVendorCard title={item.name} />
          </Link>
        );
      })}
    </div>
  );
}

export default SearchPageVendorsList;
