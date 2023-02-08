import React, {MouseEventHandler} from "react";
import IconFavoriteOutline from "assets/icons/IconFavoriteOutline";
import classNames from "classnames";

interface IAppHeaderFavorite {
  className?: string;
  onClick?: MouseEventHandler;
  type?: "black" | "white";
}

function AppHeaderFavorite(props: IAppHeaderFavorite) {
  const {onClick, className, type = "black"} = props;
  const icon = classNames({
    "w-6 h-6": true,
    "text-white": type === "white",
    "text-textColor": type === "black",
  });
  return (
    <button className={className} onClick={onClick}>
      <IconFavoriteOutline className={icon} />
    </button>
  );
}

export default AppHeaderFavorite;
