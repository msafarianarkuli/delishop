import {Fragment} from "react";
import SupermarketCategoryItemHeader from "view/supermarketCategory/component/SupermarketCategoryItemHeader";
import SupermarketCategoryCard from "view/supermarketCategory/component/supermarketCategoryCard";
import Link from "next/link";
import {useSupermarketCategoryData} from "view/supermarketCategory/context/SupermarketCategoryDataProvider";

function SupermarketCategoryProductsList() {
  const {data} = useSupermarketCategoryData();
  return (
    <>
      {data?.map((value, index) => {
        if (!value.products.length) return null;
        return (
          <Fragment key={index}>
            <SupermarketCategoryItemHeader title={value.displayname} />
            <div className="flex overflow-auto py-5 pr-screenSpace">
              {value.products?.map((item, index) => {
                const product = item.productKind[0];
                return (
                  <Link key={index} href={`/supermarket/product/${item.id}`} prefetch={false}>
                    <SupermarketCategoryCard
                      title={item.displayname}
                      image={product.photo_igu}
                      price={product.price}
                      coin={item.point}
                      description={item.description_te}
                    />
                  </Link>
                );
              })}
            </div>
          </Fragment>
        );
      })}
    </>
  );
}

export default SupermarketCategoryProductsList;
