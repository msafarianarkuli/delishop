import {CustomSwiper} from "components";
import {Autoplay, Pagination} from "swiper";
import "swiper/css/pagination";
import {useHomeBannersData} from "view/home/context/HomeBannersDataProvider";

function HomeAdsSwiper() {
  const {data} = useHomeBannersData();
  return (
    <div className="mb-5">
      <CustomSwiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={10}
        className="pb-10"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        data={data || []}
        renderItem={(item) => {
          return (
            <div className="relative pb-[31.1%]">
              <a href={item.link} className="absolute block w-full h-full" rel="noopener noreferrer nofollow">
                <img src={item.main_img} alt={item.title} className="w-full h-full object-cover object-center" />
              </a>
            </div>
          );
        }}
      />
    </div>
  );
}

export default HomeAdsSwiper;
