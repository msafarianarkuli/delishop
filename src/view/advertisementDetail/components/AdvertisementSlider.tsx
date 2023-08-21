import {CustomSwiper} from "components";
import {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css/pagination";
import {IGetAdDataAdsItems} from "types/interfaceAd";

interface IAdvertisementSlider {
  data: IGetAdDataAdsItems;
}

const AdvertisementSlider = (props: IAdvertisementSlider) => {
  const {data} = props;
  const images = [{img: data.main_img}, {img: data.img_2}, {img: data.img_3}, {img: data.img_4}];
  return (
    <div className="mb-5 px-[25px]">
      <CustomSwiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        className="pb-10"
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        data={images || []}
        renderItem={(item) => {
          return (
            <div className="relative pb-[50%] rounded-[50px] z-0">
              <div className="absolute block w-full h-full" rel="noopener noreferrer nofollow">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-center rounded-[50px]"
                />
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default AdvertisementSlider;
