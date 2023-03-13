import {Fragment} from "react";
import SupermarketCategorySubCategory from "view/supermarketCategory/component/SupermarketCategorySubCategory";
import SupermarketCategoryItemHeader from "view/supermarketCategory/component/SupermarketCategoryItemHeader";
import SupermarketCategoryCard from "view/supermarketCategory/component/supermarketCategoryCard";
import Link from "next/link";
import {useSupermarketCategoryData} from "view/supermarketCategory/context/SupermarketCategoryDataProvider";

function SupermarketCategoryList() {
  const {data} = useSupermarketCategoryData();
  return (
    <div className="mt-headerNormal">
      <SupermarketCategorySubCategory />
      {data?.map((value, index) => {
        if (!value.products.length) return null;
        return (
          <Fragment key={index}>
            <SupermarketCategoryItemHeader title={value.displayname} />
            <div className="flex overflow-auto py-5 pr-screenSpace">
              {value.products?.map((item, index) => {
                const product = item.productKind[0];
                return (
                  <Link key={index} href={`/supermarket/product/${item.id}`}>
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
    </div>
  );
}

export default SupermarketCategoryList;
