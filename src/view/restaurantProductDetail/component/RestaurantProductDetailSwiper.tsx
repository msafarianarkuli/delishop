import React from "react";
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
  return (
    <>
      <CustomSwiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1.5}
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
            <div className="relative pb-[100%] bg-red-500 rounded-full">
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
