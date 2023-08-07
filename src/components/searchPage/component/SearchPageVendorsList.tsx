import {useSearchPageData} from "components/searchPage/context/SearchPageDataProvider";
import SearchPageVendorCard from "components/searchPage/component/SearchPageVendorCard";
import Link from "next/link";
import {restaurantsVendorIds} from "utils/Const";

function SearchPageVendorsList() {
  const {data} = useSearchPageData();

  return (
    <div>
      {data?.vendors_suggest.vendors.map((item) => {
        let url = "";
        if (restaurantsVendorIds.includes(item.vendor_category_id)) {
          url = `/restaurant/${item.id}`;
        } else {
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
