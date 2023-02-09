import React from "react";
import styles from "view/home/component/homeAdsCard/homeAdsCard.module.scss";

interface IHomeAdsCard {
  title: string;
  image: string;
  more: string;
}

function HomeAdsCard(props: IHomeAdsCard) {
  const {title, image, more} = props;
  return (
    <div className={styles.home_ads_card_container}>
      <div className="relative w-full pb-[34%] bg-red-500">
        <img loading="lazy" src={image} alt={title} className="absolute w-full h-full object-center object-cover" />
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="truncate text-[15] mr-1">{title}</div>
        <div className="inner_box min-w-[40px] text-primary text-[15px] font-medium whitespace-nowrap">{more}</div>
      </div>
    </div>
  );
}

export default HomeAdsCard;
