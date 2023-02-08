import React from "react";
import {CustomSwiper} from "components";
import {Autoplay, Pagination} from "swiper";
import img from "assets/images/banner2.png";
import {TDataCustomSwiper} from "components/customSwiper/CustomSwiper";

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

function HomeAdsSlider2() {
  return (
    <div className="px-screenSpace mb-5 mt-10">
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
            <div className="relative pb-[34%]">
              <div className="absolute w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center rounded-[15px]"
                />
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default HomeAdsSlider2;
