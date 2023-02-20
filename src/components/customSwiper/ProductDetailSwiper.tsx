import React, {useEffect, useState} from "react";
import {CustomSwiper} from "components/index";
import {Autoplay, Pagination} from "swiper";
import {TDataCustomSwiper} from "components/customSwiper/CustomSwiper";

function ProductDetailSwiper({data}: {data: TDataCustomSwiper}) {
  const [slidesPreView, setSlidesPreView] = useState<number>(1);

  useEffect(() => {
    setSlidesPreView(1.5);
  }, []);

  return (
    <>
      <CustomSwiper
        modules={[Pagination, Autoplay]}
        slidesPerView={slidesPreView}
        slidesPerGroup={1}
        spaceBetween={10}
        className="pb-10 product_detail_swiper"
        centeredSlides
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
            <div
              className="relative bg-red-500 rounded-full"
              style={{paddingBottom: slidesPreView === 1 ? "65.9%" : "100%"}}
            >
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
    </>
  );
}

export default ProductDetailSwiper;
