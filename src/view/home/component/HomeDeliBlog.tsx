import HomeTitle from "view/home/component/HomeTitle";
import HomeAdsCard from "view/home/component/homeAdsCard/HomeAdsCard";
import {IBlog} from "types/interfaceBlog";

interface IHomeDeliBlog {
  blogs: IBlog[];
}

function HomeDeliBlog(props: IHomeDeliBlog) {
  const {blogs} = props;
  return (
    <div>
      <HomeTitle className="px-screenSpace" title="وبلاگ دلی شاپ" />
      <div className="flex items-center overflow-auto">
        {blogs.map((blog) => (
          <HomeAdsCard
            key={blog.id}
            id={blog.id}
            horizontal
            title={blog.title}
            image={blog.image}
            more="بیشتر بدانید"
          />
        ))}
      </div>
    </div>
  );
}

export default HomeDeliBlog;
