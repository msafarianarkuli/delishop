import {Swiper, SwiperProps, SwiperSlide, SwiperSlideProps} from "swiper/react";
import "swiper/css";
import {ReactNode} from "react";

interface IDataCustomSwiperItem {
  swiperSlideProps?: SwiperSlideProps;

  [x: string]: any;
}

export type TDataCustomSwiper = IDataCustomSwiperItem[];

interface ICustomSwiper extends SwiperProps {
  data: TDataCustomSwiper;
  renderItem: (item: IDataCustomSwiperItem, index: number, data: TDataCustomSwiper) => ReactNode;
}

function CustomSwiper(props: ICustomSwiper) {
  const {data, renderItem, ...rest} = props;
  return (
    <Swiper {...rest}>
      {data.map((item, index) => {
        return (
          <SwiperSlide {...item.swiperSlideProps} key={index}>
            {renderItem(item, index, data)}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default CustomSwiper;
