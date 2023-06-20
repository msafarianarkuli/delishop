import {IconBread, IconCafe, IconConfection, IconDairy, IconFruit, IconMore, IconProtein} from "assets/icons";
import {CustomSwiper} from "components";
import {TDataCustomSwiper} from "components/customSwiper/CustomSwiper";
import Link from "next/link";
import classNames from "classnames";
import {Autoplay, Pagination} from "swiper";
import "swiper/css/pagination";
import {useEffect, useState} from "react";
import styles from "view/home/home.module.scss";

const data: TDataCustomSwiper = [
  {
    title: "کافه",
    icon: IconCafe,
    link: "/coffee",
  },
  {
    title: "لبنیاتی",
    icon: IconDairy,
    link: "/daily",
  },
  {
    title: "پروتئینه",
    icon: IconProtein,
    link: "/protein",
  },
  {
    title: "قنادی",
    icon: IconConfection,
    link: "/confectionery",
  },
  {
    title: "میوه",
    icon: IconFruit,
    link: "/fruit",
  },
  {
    title: "نان",
    icon: IconBread,
    link: "/bakery",
  },
  {
    title: "بیشتر",
    icon: IconMore,
    link: "/morejobs",
  },
];

function HomeOtherCategory() {
  const [slidesPreView, setSlidePerView] = useState(1);

  useEffect(() => {
    setSlidePerView(3);
  }, []);

  return (
    <>
      <CustomSwiper
        slidesPerGroup={3}
        // slidesPerView={3}
        slidesPerView={slidesPreView}
        spaceBetween={0}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        data={data}
        className="pb-10 pt-5 ml-[38px] mr-[30px]"
        renderItem={(item, index, arr) => {
          const Icon = item.icon;
          const iconClassName = classNames({
            "w-auto mobile:h-7 h-5": arr.length - 1 !== index,
            "w-9 h-auto": arr.length - 1 === index,
          });
          return (
            <div className="pl-[5px] pr-[15px]">
              <div
                className={styles.home_other_category_box}
                style={{paddingBottom: slidesPreView === 1 ? "29.42%" : "100%"}}
              >
                <Link href={item.link} className="absolute flex flex-col items-center justify-center w-full h-full">
                  <Icon className={iconClassName} />
                  <div className="mt-2">{item.title}</div>
                </Link>
              </div>
            </div>
          );
        }}
      />
    </>
  );
}

export default HomeOtherCategory;
