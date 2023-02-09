import {IconAdd, IconMinus} from "assets/icons";
import {ReactNode, useState} from "react";
import classNames from "classnames";
import styles from "components/counter/counter.module.scss";

interface ICounter {
  initialValue?: number;
  onAddClick?: (count: number) => void;
  onMinusClick?: (count: number) => void;
  addIcon?: ReactNode;
  minusIcon?: ReactNode;
  showMinusOnlyPositiveNumber?: boolean;
  showNumberOnlyPositiveNumber?: boolean;
  className?: string;
}

function Counter(props: ICounter) {
  const {
    initialValue,
    onMinusClick,
    onAddClick,
    addIcon,
    minusIcon,
    showMinusOnlyPositiveNumber,
    showNumberOnlyPositiveNumber,
    className = "",
  } = props;
  const [counter, setCounter] = useState(initialValue || 0);

  function showNumber() {
    if (showNumberOnlyPositiveNumber && counter <= 0) return null;
    return <div className="text-[17px] font-bold text-center w-[30px]">{counter}</div>;
  }

  function showMinusBtn() {
    if (showMinusOnlyPositiveNumber && counter <= 0) return null;
    return (
      <button
        className={styles.counter_minus}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (counter > 0) {
            onMinusClick?.(counter - 1);
            setCounter((prevState) => prevState - 1);
          }
        }}
      >
        {minusIcon ? minusIcon : <IconMinus className="w-[15px] h-auto" />}
      </button>
    );
  }

  const container = classNames({
    "flex flex-nowrap items-center": true,
    [className]: className,
  });

  return (
    <div className={container}>
      <button
        className="flex items-center justify-center w-[30px] h-[30px] bg-primary rounded-full"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onAddClick?.(counter + 1);
          setCounter((prevState) => prevState + 1);
        }}
      >
        {addIcon ? addIcon : <IconAdd className="w-[15px] h-[15] drop-shadow-[0px_1px_3px_rgba(36,65,93,0.298)]" />}
      </button>
      {showNumber()}
      {showMinusBtn()}
    </div>
  );
}

export default Counter;
