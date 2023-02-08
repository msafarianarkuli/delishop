import HomeTitle from "view/home/component/HomeTitle";
import {IconRoundedLeft} from "assets/icons";
import HomeVendorCard from "view/home/component/homeVendorCard/HomeVendorCard";
import img1 from "assets/images/res01.png";

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

function HomeCoin() {
  return (
    <div>
      <div className="flex items-center justify-between px-screenSpace mb-5">
        <HomeTitle title="سکه دار ها" />
        <div className="flex items-center text-primary text-[15px] font-semibold">
          <span>همه</span>
          <IconRoundedLeft className="w-5 h-5" />
        </div>
      </div>
      <div className="flex items-center overflow-auto pb-5">
        {arr.map((item) => {
          return (
            <HomeVendorCard
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
    </div>
  );
}

export default HomeCoin;
