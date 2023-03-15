import {IconCoin} from "assets/icons";
import classNames from "classnames";

export interface IInfoPageCoinBase {
  point: number;
  name: string;
}

interface IInfoPageCoin extends IInfoPageCoinBase {
  color: string;
}

function InfoPageCoin(props: IInfoPageCoin) {
  const {point, name, color} = props;

  const pointClassName = classNames({
    "ml-1": true,
    [color]: color,
  });

  return (
    <div className="flex items-center py-5 px-screenSpace text-[13px]">
      <IconCoin className="w-5 h-5 ml-2" />
      <span className={pointClassName}>{point}</span>
      <span className="mx-1">سکه ، جایزه خرید از</span>
      <span>{name}</span>
    </div>
  );
}

export default InfoPageCoin;
