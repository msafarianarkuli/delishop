import React from "react";
import {CustomSwiper} from "components";
import {Autoplay, Pagination} from "swiper";
import {useHomeAdsData} from "view/home/context/HomeAdsDataProvider";

function HomeAdsSwiper2() {
  const {data} = useHomeAdsData();
  return (
    <div className="mb-5 mt-10">
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
            <div className="relative pb-[50%]">
              <a
                href={`/advertisement/${item.id}`}
                className="absolute block w-full h-full"
                rel="noopener noreferrer nofollow"
              >
                <img src={item.main_img} alt={item.title} className="w-full h-full object-cover object-center" />
              </a>
            </div>
          );
        }}
      />
    </div>
  );
}

export default HomeAdsSwiper2;
