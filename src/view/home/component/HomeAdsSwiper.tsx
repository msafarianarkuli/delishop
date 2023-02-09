import {CustomSwiper} from "components";
import {TDataCustomSwiper} from "components/customSwiper/CustomSwiper";
import {Autoplay, Pagination} from "swiper";
import img from "assets/images/banner.png";
import "swiper/css/pagination";

const data: TDataCustomSwiper = [
  {
    title: 1,
    image: img.src,
  },
  {
    title: 2,
    image: img.src,
  },
  {
    title: 3,
    image: img.src,
  },
  {
    title: 4,
    image: img.src,
  },
];

function HomeAdsSwiper() {
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
        data={data}
        renderItem={(item) => {
          return (
            <div className="relative pb-[50%]">
              <div className="absolute w-full h-full">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover object-center" />
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default HomeAdsSwiper;
