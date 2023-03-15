import {IconCoin} from "assets/icons";

export interface IInfoPageCoin {
  point: number;
  name: string;
}

function InfoPageCoin(props: IInfoPageCoin) {
  const {point, name} = props;

  return (
    <div className="flex items-center py-5 px-screenSpace text-[13px]">
      <IconCoin className="w-5 h-5 ml-2" />
      <span className="ml-1 text-primary">{point}</span>
      <span className="mx-1">سکه ، جایزه خرید از</span>
      <span>{name}</span>
    </div>
  );
}

export default InfoPageCoin;
