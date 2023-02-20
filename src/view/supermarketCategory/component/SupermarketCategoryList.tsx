import {Fragment} from "react";
import SupermarketCategorySubCategory from "view/supermarketCategory/component/SupermarketCategorySubCategory";
import SupermarketCategoryItemHeader from "view/supermarketCategory/component/SupermarketCategoryItemHeader";
import SupermarketCategoryCard from "view/supermarketCategory/component/supermarketCategoryCard";
import img from "assets/images/supermarket_category_item.png";

const arr = Array.from(new Array(10), (_, i) => ({
  id: i + 1,
  title: "دستمال کاغذی دو لایه راشین",
  image: img.src,
  description: "150 برگ",
  coin: 15,
  price: 25500,
}));

const arr2 = Array.from(new Array(5), () => ({title: "دستمال کاغذی"}));

function SupermarketCategoryList() {
  return (
    <div className="mt-headerNormal">
      <SupermarketCategorySubCategory />
      {arr2.map((value, index) => {
        return (
          <Fragment key={index}>
            <SupermarketCategoryItemHeader title={value.title} />
            <div className="flex overflow-auto py-5 pr-screenSpace">
              {arr.map((item, index) => {
                return (
                  <SupermarketCategoryCard
                    key={index}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    coin={item.coin}
                    description={item.description}
                  />
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
