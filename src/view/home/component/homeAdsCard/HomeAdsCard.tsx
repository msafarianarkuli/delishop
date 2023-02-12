import React from "react";
import styles from "view/home/component/homeAdsCard/homeAdsCard.module.scss";
import classNames from "classnames";

interface IHomeAdsCard {
  title: string;
  image: string;
  more: string;
  horizontal?: boolean;
}

function HomeAdsCard(props: IHomeAdsCard) {
  const {title, image, more, horizontal = false} = props;
  const container = classNames({
    [styles.home_ads_card_container]: true,
    [styles.home_ads_card_container_horizontal]: horizontal,
  });
  return (
    <div className={container}>
      <div className="relative w-full pb-[34%]">
        <img src={image} alt={title} className="absolute w-full h-full object-center object-cover" />
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="truncate text-[15] mr-1">{title}</div>
        <div className="inner_box text-primary text-[15px] font-medium whitespace-nowrap">{more}</div>
      </div>
    </div>
  );
}

export default HomeAdsCard;
