import {useSearchPageData} from "components/searchPage/context/SearchPageDataProvider";
import SearchPageProductCard from "components/searchPage/component/SearchPageProductCard";
// import {restaurantsVendorIds} from "utils/Const";
import {roundPrice} from "utils/utils";
import VendorProductBottomSheet from "view/product/VendorProductBottomSheet";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

function SearchPageProductsList() {
  const router = useRouter();
  const {data} = useSearchPageData();
  const [bottomSheet, setBottomSheet] = useState(false);

  useEffect(() => {
    setBottomSheet(false);
  }, [router.asPath]);

  const [product, setProduct] = useState({});

  const handleProductData = (item: any) => {
    setProduct(item);
    setBottomSheet(true);
    console.log(item);
  };
  return (
    <div>
      {data?.products_suggest.products.map((item) => {
        if (!item.productKinds.length) return null;
        const product = item.productKinds[0];
        const price = product?.price_num || 0;
        const addedPercent = item.priceClass / 100;
        const finalPrice = price + price * addedPercent;
        // let url;
        // if (restaurantsVendorIds.includes(item.vendor.vendor_category_id)) {
        //   url = `/restaurant/${item.vendor.id}`;
        // } else {
        //   url = `/supermarket/${item.vendor.id}`;
        // }
        return (
          <SearchPageProductCard
            key={item.id}
            title={item.displayname}
            name={item.vendor.name}
            price={roundPrice(finalPrice / 10)}
            image={product.photo_igu}
            onClick={() => handleProductData(item)}
          />
        );
      })}
      <VendorProductBottomSheet
        open={bottomSheet}
        onClose={() => setBottomSheet(false)}
        data={product}
        isRestaurant={true}
      />
    </div>
  );
}

export default SearchPageProductsList;
