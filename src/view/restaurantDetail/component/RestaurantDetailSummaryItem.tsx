import {ReactNode} from "react";
import classNames from "classnames";

interface IRestaurantDetailSummary {
  top: ReactNode;
  bottom: ReactNode;
  classNameContainer?: string;
  classNameTop?: string;
  classNameBottom?: string;
}

function RestaurantDetailSummaryItem(props: IRestaurantDetailSummary) {
  const {classNameContainer = "", classNameTop = "", classNameBottom = "", top, bottom} = props;

  const container = classNames({
    "relative flex flex-col items-center justify-center text-center": true,
    [classNameContainer]: classNameContainer,
  });

  const bottomClassName = classNames({
    "flex items-center text-iconColor text-[13px]": true,
    [classNameBottom]: classNameBottom,
  });
  return (
    <div className={container}>
      <div className={classNameTop}>{top}</div>
      <div className={bottomClassName}>{bottom}</div>
    </div>
  );
}

export default RestaurantDetailSummaryItem;
