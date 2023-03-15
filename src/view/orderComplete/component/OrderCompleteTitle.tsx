import React, {ReactNode} from "react";
import {TUseTypeColor} from "hooks/useTypeColor";
import classNames from "classnames";

interface IOrderCompleteTitle {
  title: string;
  left?: ReactNode;
  type?: TUseTypeColor;
}

function OrderCompleteTitle(props: IOrderCompleteTitle) {
  const {title, type = "default", left} = props;

  const dotClassNames = classNames({
    "w-[7px] h-[7px] ml-1 rounded-full": true,
    "bg-primary": type === "default",
    "bg-primarySupermarket": type === "supermarket",
  });
  return (
    <div className="flex items-center justify-between px-screenSpace mb-5">
      <div className="flex items-center">
        <div className={dotClassNames} />
        <div className="font-medium">{title}</div>
      </div>
      {left}
    </div>
  );
}

export default OrderCompleteTitle;
