import {IconDeleteCart} from "assets/icons";
import {Button} from "antd";
import {MouseEventHandler} from "react";
import classNames from "classnames";

interface IAppHeaderDelete {
  onClick?: MouseEventHandler;
  className?: string;
}

function AppHeaderDelete({onClick, className = ""}: IAppHeaderDelete) {
  const container = classNames({
    "flex items-center justify-center border-0 shadow-none p-0": true,
    [className]: className,
  });
  return <Button onClick={onClick} icon={<IconDeleteCart className="w-5 h-auto" />} className={container} />;
}

export default AppHeaderDelete;
