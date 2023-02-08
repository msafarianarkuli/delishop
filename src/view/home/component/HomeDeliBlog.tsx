import HomeTitle from "view/home/component/HomeTitle";
import HomeAdsCard from "view/home/component/homeAdsCard/HomeAdsCard";
import img from "assets/images/deli-blog.png";

function HomeDeliBlog() {
  return (
    <div className="px-screenSpace">
      <HomeTitle title="وبلاگ دلی شاپ" />
      <HomeAdsCard title="برای کاهش وزن چه غذاهایی سفارش دهیم؟" image={img.src} more="بیشتر بدانید" />
    </div>
  );
}

export default HomeDeliBlog;
