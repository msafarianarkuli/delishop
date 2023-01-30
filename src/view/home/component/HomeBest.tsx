import img1 from "assets/images/res01.png";
import HomeBestCard from "view/home/component/homeBestCard/HomeBestCard";

const arr = Array.from(new Array(5), (_, i) => ({
  id: i + 1,
  image: img1.src,
  title: "ساندویچ برگر 99",
  address: "خیابان ولی عصر",
  description: "فست فود برگر پیتزا ساندویچ",
  star: 4,
  coin: 15,
  time: 35,
}));

function HomeBest() {
  return (
    <div className="flex items-center overflow-auto pb-5">
      {arr.map((item) => {
        return (
          <HomeBestCard
            key={item.id}
            image={item.image}
            title={item.title}
            address={item.address}
            description={item.description}
            star={item.star}
            time={item.time}
            coin={item.coin}
          />
        );
      })}
    </div>
  );
}

export default HomeBest;
