import HomeTitle from "view/home/component/HomeTitle";
import HomeAdsCard from "view/home/component/homeAdsCard/HomeAdsCard";
import img from "assets/images/deli-blog.png";

const arr = Array.from(new Array(5), (_, i) => i + 1);

function HomeDeliBlog() {
  return (
    <div>
      <HomeTitle className="px-screenSpace" title="وبلاگ دلی شاپ" />
      <div className="flex items-center overflow-auto">
        {arr.map((item) => (
          <HomeAdsCard
            key={item}
            horizontal
            title="برای کاهش وزن چه غذاهایی سفارش دهیم؟"
            image={img.src}
            more="بیشتر بدانید"
          />
        ))}
      </div>
    </div>
  );
}

export default HomeDeliBlog;
