import React, {useEffect, useState} from "react";
import {Autoplay, Pagination} from "swiper";
import img from "assets/images/product-detail.png";
import {CustomSwiper} from "components";
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

function RestaurantProductDetailSwiper() {
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
        className="pb-10 restaurant_product_detail_swiper"
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

export default RestaurantProductDetailSwiper;
