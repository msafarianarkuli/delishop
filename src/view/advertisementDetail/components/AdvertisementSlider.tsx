import {CustomSwiper} from "components";
import {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css/pagination";

const AdvertisementSlider = () => {
  const data = [
    {
      title: "نانوایی",
      main_img: "https://fastly.picsum.photos/id/862/800/400.jpg?hmac=lSxU3XEG61ZKAOkHSq0fVqKOt9h9UxL1jaMETejPCoI",
      link: "/bakery",
    },
    {
      title: "قنادی",
      main_img: "https://fastly.picsum.photos/id/862/800/400.jpg?hmac=lSxU3XEG61ZKAOkHSq0fVqKOt9h9UxL1jaMETejPCoI",
      link: "/confectionery",
    },
    {
      title: "میوه",
      main_img: "https://fastly.picsum.photos/id/862/800/400.jpg?hmac=lSxU3XEG61ZKAOkHSq0fVqKOt9h9UxL1jaMETejPCoI",
      link: "/fruit",
    },
    {
      title: "داروخانه",
      main_img: "https://fastly.picsum.photos/id/862/800/400.jpg?hmac=lSxU3XEG61ZKAOkHSq0fVqKOt9h9UxL1jaMETejPCoI",
      link: "/drug",
    },
    {
      title: "پروتئینی",
      main_img: "https://fastly.picsum.photos/id/862/800/400.jpg?hmac=lSxU3XEG61ZKAOkHSq0fVqKOt9h9UxL1jaMETejPCoI",
      link: "/protein",
    },
    {
      title: "کافه",
      main_img: "https://fastly.picsum.photos/id/862/800/400.jpg?hmac=lSxU3XEG61ZKAOkHSq0fVqKOt9h9UxL1jaMETejPCoI",
      link: "/coffee",
    },
  ];

  return (
    <div className="mb-5">
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
        data={data || []}
        renderItem={(item) => {
          return (
            <div className="relative pb-[50%] rounded-[50px] z-0">
              <a href={item.link} className="absolute block w-full h-full" rel="noopener noreferrer nofollow">
                <img
                  src={item.main_img}
                  alt={item.title}
                  className="w-full h-full object-cover object-center rounded-[50px]"
                />
              </a>
            </div>
          );
        }}
      />
    </div>
  );
};

export default AdvertisementSlider;
