import {useSearchPageData} from "components/searchPage/context/SearchPageDataProvider";
import SearchPageProductCard from "components/searchPage/component/SearchPageProductCard";
import Link from "next/link";
import {restaurantsVendorIds} from "utils/Const";
import {roundPrice} from "utils/utils";

function SearchPageProductsList() {
  const {data} = useSearchPageData();
  console.log(data?.products_suggest);
  return (
    <div>
      {data?.products_suggest.products.map((item) => {
        if (!item.productKinds.length) return null;
        const product = item.productKinds[0];
        const price = product?.price_num || 0;
        const addedPercent = item.priceClass / 100;
        const finalPrice = price + price * addedPercent;
        let url = "";
        if (restaurantsVendorIds.includes(item.vendor.vendor_category_id)) {
          url = `/restaurant/${item.vendor.id}`;
        } else {
          url = `/supermarket/${item.vendor.id}`;
        }
        return (
          <Link key={item.id} href={url} prefetch={false}>
            <SearchPageProductCard
              title={item.displayname}
              name={item.vendor.name}
              price={roundPrice(finalPrice / 10)}
              image={product.photo_igu}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default SearchPageProductsList;
