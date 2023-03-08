import {Button} from "antd";
import {IconAdd, IconClose, IconDeleteAddress} from "assets/icons";
import {useState} from "react";
import styles from "view/orderComplete/component/orderCompleteCard/orderCompleteCard.module.scss";

interface IExtraOrderCompleteCardItem {
  title: string;
  price: number;
}

export type TExtraOrderCompleteCard = IExtraOrderCompleteCardItem[];

interface IOrderCompleteCard {
  title: string;
  extra?: TExtraOrderCompleteCard;
  price: number;
  count: number;
  onAddItem: () => void;
}

function OrderCompleteCard(props: IOrderCompleteCard) {
  const {count, extra, price, title, onAddItem} = props;
  const [counter, setCounter] = useState(count || 0);

  return (
    <div className="border border-borderColor rounded-[8px] p-3 mb-3">
      <div>{title}</div>
      <div className="flex items-center flex-wrap my-3">
        {extra?.map((item, index) => {
          return (
            <div key={index} className="flex items-center p-1 bg-[#DFDFDF] rounded-full text-[13px] ml-1 mb-1">
              <div>{item.title}</div>
              <span>:</span>
              <div className="mx-1">
                <span>{item.price.toLocaleString("en-US")}</span>
                <span className="mr-1">تومان</span>
              </div>
              <Button
                className="flex items-center justify-center w-5 h-5 border-0 p-0 shadow-none rounded-full bg-[#575F6B]"
                icon={<IconClose className="w-2 h-2 text-white" />}
              />
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span>{price.toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </div>
        <div className="flex flex-nowrap items-center">
          <button
            className="flex items-center justify-center w-[30px] h-[30px] bg-primary rounded-full"
            onClick={() => {
              console.log("counter", counter);
              if (counter === 0) onAddItem();
              setCounter((prevState) => prevState + 1);
            }}
          >
            <IconAdd className="w-[15px] h-[15] drop-shadow-[0px_1px_3px_rgba(36,65,93,0.298)]" />
          </button>
          {counter ? (
            <>
              <div className="text-center w-[30px]">{counter}</div>
              <button
                className={styles.restaurant_complete_card_delete}
                onClick={() => {
                  if (counter > 0) setCounter((prevState) => prevState - 1);
                }}
              >
                <IconDeleteAddress className="w-[17px] h-[17px]" />
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default OrderCompleteCard;
