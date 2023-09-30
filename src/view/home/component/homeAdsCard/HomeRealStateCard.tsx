import React from "react";
import styles from "view/home/component/homeAdsCard/homeAdsCard.module.scss";
import classNames from "classnames";
import {useRouter} from "next/router";
import {dateConvert} from "utils/utils";
import IconAngleLeft from "assets/icons/new/IconAngleLeft";

interface IHomeRealStateCard {
  id?: string;
  title: string;
  image: string;
  more: string;
  href?: string;
  horizontal?: boolean;
  imgPosition?: string;
  price: number;
  date: string;
  status: string;
}

function HomeRealStateCard(props: IHomeRealStateCard) {
  const {id, title, image, more, href, horizontal = false, price, date, status} = props;
  const {monthTitle, dayWeek, day} = dateConvert(date);
  const router = useRouter();

  const container = classNames({
    [styles.home_ads_card_container]: true,
    [styles.home_ads_card_container_horizontal]: horizontal,
  });

  const handleLink = () => {
    router.push(`/${href}/${id}`);
  };
  return (
    <div className={`${container} flex gap-4 p-3 h-[150px] `}>
      <img src={image} alt="" className="w-[220px] object-cover rounded-lg" />
      <div className="relative w-full">
        <p className="text-md font-bold">{title}</p>
        <p className="mt-2">
          <span>قیمت: </span>
          <span>{price.toLocaleString("en-US")}</span>
        </p>
        <p className="mt-2 text-xs sm:text-sm">
          <span>وضعیت: </span>
          <span>{status}</span>
        </p>
        <div className="absolute bottom-2 flex justify-between items-center w-full text-[11px] sm:text-sm">
          <div>
            {dayWeek} {day} {monthTitle}
          </div>
          <div onClick={handleLink} className="text-primary flex gap-2">
            {more}
            <IconAngleLeft className="w-2" fill="#FF5500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeRealStateCard;
