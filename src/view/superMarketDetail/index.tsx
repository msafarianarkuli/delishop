import SupermarketDetailHeader from "view/superMarketDetail/component/SupermarketDetailHeader";
import SupermarketDetailTitle from "view/superMarketDetail/component/SupermarketDetailTitle";
import SupermarketDetailCategoryTitle from "view/superMarketDetail/component/SupermarketDetailCategoryTitle";
import img from "assets/images/supermarket_detail.png";
import img1 from "assets/images/supermarket_category.png";
import SuperMarketDetailCard from "view/superMarketDetail/component/superMarketDetailCard";
import Link from "next/link";

const data = {
  image: img.src,
  title: "تک مارکت",
  address: "بلوار اصلی",
  price: 6500,
  rate: 4.6,
  coin: 15,
};

// const arr = Array.from(new Array(20), (_, i) => ({
//   id: i + 1,
//   title: "دستمال و شوینده",
//   image: img1.src,
// }));

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

function SuperMarketDetail() {
  return (
    <>
      <SupermarketDetailHeader />
      <div className="mt-headerNormal px-screenSpace">
        <SupermarketDetailTitle
          title={data.title}
          coin={data.coin}
          image={data.image}
          rate={data.rate}
          price={data.price}
          address={data.address}
        />
        <SupermarketDetailCategoryTitle title="دسته بندی" />
      </div>
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

export default SuperMarketDetail;
