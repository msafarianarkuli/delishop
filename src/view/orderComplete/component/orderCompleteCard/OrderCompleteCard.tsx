import {Button} from "antd";
import {IconClose} from "assets/icons";
import {useMemo} from "react";
import {TCartDataItemExtra} from "types/interfaces";
import {Counter} from "components";
import {TUseTypeColor} from "hooks/useTypeColor";

interface IOrderCompleteCard {
  title: string;
  extra?: TCartDataItemExtra;
  price: number;
  count: number;
  onAddClick: () => void;
  onMinusClick: () => void;
  onClickExtra: (id: number) => void;
  primaryType?: TUseTypeColor;
}

function OrderCompleteCard(props: IOrderCompleteCard) {
  const {count, extra, price, title, onAddClick, onMinusClick, onClickExtra, primaryType} = props;

  const extraPrice = useMemo(() => {
    if (extra?.length) {
      return extra.reduce((arr, current) => arr + current.price, 0);
    }
    return 0;
  }, [extra]);

  const totalPrice = useMemo(() => {
    return count * price + extraPrice;
  }, [count, extraPrice, price]);

  return (
    <div className="my-6">
      <div>{title}</div>
      <div className="flex items-center flex-wrap my-3">
        {extra?.map((item, index) => {
          return (
            <div key={index} className="flex items-center p-1 bg-[#DFDFDF] rounded-full text-[13px] ml-1 mb-1">
              <div>{item.name}</div>
              <span>:</span>
              <div className="mx-1">
                <span>{item.price.toLocaleString("en-US")}</span>
                <span className="mr-1">تومان</span>
              </div>
              <Button
                onClick={() => onClickExtra(item.id)}
                className="flex items-center justify-center w-5 h-5 border-0 p-0 shadow-none rounded-full bg-[#575F6B]"
                icon={<IconClose className="w-2 h-2 text-white" />}
              />
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span>{totalPrice.toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </div>
        <Counter
          primaryType={primaryType}
          count={count}
          // minusIcon={<IconDeleteAddress className="w-[17px] h-[17px]" />}
          onAddClick={onAddClick}
          onMinusClick={onMinusClick}
        />
      </div>
    </div>
  );
}

export default OrderCompleteCard;
