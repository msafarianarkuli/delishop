import {CustomSwiper} from "components";
import {TDataCustomSwiper} from "components/customSwiper/CustomSwiper";
import {Pagination} from "swiper";
import "swiper/css/pagination";

const data: TDataCustomSwiper = [
  {
    title: 1,
    image: "https://picsum.photos/390/195",
  },
  {
    title: 2,
    image: "https://picsum.photos/390/195",
  },
  {
    title: 3,
    image: "https://picsum.photos/390/195",
  },
  {
    title: 4,
    image: "https://picsum.photos/390/195",
  },
];

function HomeAdsSlider() {
  return (
    <div className="px-screenSpace mb-5">
      <CustomSwiper
        modules={[Pagination]}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={10}
        className="pb-10"
        pagination={{
          clickable: true,
        }}
        data={data}
        renderItem={(item) => {
          return (
            <div className="relative pb-[50%]">
              <div className="absolute w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center rounded-[10px]"
                />
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default HomeAdsSlider;
