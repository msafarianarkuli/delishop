import HomeMainCategory from "view/home/component/HomeMainCategory";
import HomeOtherCategory from "view/home/component/HomeOtherCategory";

function HomeCategory() {
  return (
    <div className="my-[30px]">
      <HomeMainCategory />
      <HomeOtherCategory />
    </div>
  );
}

export default HomeCategory;
