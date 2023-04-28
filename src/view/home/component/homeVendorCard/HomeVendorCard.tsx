import styles from "view/home/component/homeVendorCard/homeVendorCard.module.scss";
import {useMemo} from "react";
import {IconClock, IconCoin, IconStarOutline, IconStarFill} from "assets/icons";

interface IHomeBestCard {
  image?: string;
  title: string;
  description: string;
  star: number;
  time: string;
  coin: number;
}

const maxStar = 5;

function HomeVendorCard(props: IHomeBestCard) {
  const {image, coin, star, title, time, description} = props;

  const starFill = useMemo(() => Array.from(new Array(star < maxStar ? Math.round(star) : 0), (_, i) => i + 1), [star]);
  const starEmpty = useMemo(
    () => Array.from(new Array(star < maxStar ? maxStar - Math.round(star) : 0), (_, i) => i + 1),
    [star]
  );

  return (
    <div className={styles.home_card_container}>
      <div className="relative w-full pb-[34.1%] overflow-hidden rounded-t-[12px]">
        <img src={image} alt={title} className="absolute inset-0 object-center object-contain w-full h-full" />
      </div>
      <div className="py-[10px] px-[15px]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="font-bold">{title}</span>
            {/*<span className="text-[12px] font-light text-textColorLight mr-2">({address})</span>*/}
          </div>
          <div className="flex items-center flex-row-reverse">
            {starFill.map((item) => (
              <IconStarFill key={item} className="w-3 h-auto mr-[1px] last:mr-0" />
            ))}
            {starEmpty.map((item) => (
              <IconStarOutline key={item} className="w-3 h-auto mr-[1px] last:mr-0" />
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-textColorLight text-[13px] font-light">{description}</div>
          <div className="flex items-center">
            <div className="flex items-center inner_box">
              <IconCoin className="w-4 h-4 ml-1" />
              <span className="text-[12px]">{coin}</span>
            </div>
            <div className="flex items-center inner_box mr-2">
              <span className="text-[12px] whitespace-nowrap">تا {time} دقیقه</span>
              <IconClock className="w-4 h-4 text-iconColor mr-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeVendorCard;
