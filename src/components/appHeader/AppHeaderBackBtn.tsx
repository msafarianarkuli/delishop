import {IconRoundedRight} from "assets/icons";
import {MouseEventHandler} from "react";
import classNames from "classnames";

interface IAppHeaderBackBtn {
  onClick?: MouseEventHandler;
  className?: string;
  type?: "white" | "black";
}

function AppHeaderBackBtn({onClick, className, type = "black"}: IAppHeaderBackBtn) {
  const icon = classNames({
    "w-8 h-8": true,
    "text-white drop-shadow-[-1px_4px_2px_#575F6B]": type === "black",
    "text-textColor": type === "black",
  });
  return (
    <button className={className} onClick={onClick}>
      <IconRoundedRight className={icon} />
    </button>
  );
}

export default AppHeaderBackBtn;
