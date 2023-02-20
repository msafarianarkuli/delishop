import Link from "next/link";
import SuperMarketDetailCard from "view/supermarketDetail/component/supermarketDetailCard";
import img1 from "assets/images/supermarket_category.png";
import SupermarketDetailCategoryTitle from "view/supermarketDetail/component/SupermarketDetailCategoryTitle";

const arr = [
  {
    id: 1,
    title: "دستمال و شوینده",
    image: img1.src,
  },
  {
    id: 2,
    title: "لبنیات",
    image: img1.src,
  },
  {
    id: 3,
    title: "خواربار و نان",
    image: img1.src,
  },
  {
    id: 4,
    title: "آرایشی و بهداشتی",
    image: img1.src,
  },
  {
    id: 5,
    title: "میوه و سبزیجات",
    image: img1.src,
  },
  {
    id: 6,
    title: "نوشیدنی ها",
    image: img1.src,
  },
];

function SupermarketDetailList() {
  return (
    <>
      <SupermarketDetailCategoryTitle title="دسته بندی" />
      <div className="flex flex-wrap px-4 pt-6">
        {arr.map((item, index) => {
          return (
            <Link
              key={index}
              href={`/supermarket/category/${item.id}`}
              className="block w-1/2 mobile:w-1/3 px-1 min-[580px]:mb-16 mb-12"
            >
              <SuperMarketDetailCard title={item.title} image={item.image} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default SupermarketDetailList;
