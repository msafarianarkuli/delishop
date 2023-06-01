import {useSearchPageData} from "components/searchPage/context/SearchPageDataProvider";
import SearchPageProductCard from "components/searchPage/component/SearchPageProductCard";
import Link from "next/link";

function SearchPageProductsList() {
  const {data} = useSearchPageData();

  return (
    <div>
      {data?.products_suggest.products.map((item) => {
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
        return (
          <Link key={item.id} href={url} prefetch={false}>
            <SearchPageProductCard
              title={item.displayname}
              name={item.vendor.name}
              price={finalPrice}
              image={product.photo_igu}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default SearchPageProductsList;
