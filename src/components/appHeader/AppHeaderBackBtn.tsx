import {IconRoundedRight} from "assets/icons";
import {MouseEventHandler} from "react";

interface IAppHeaderBackBtn {
  onClick?: MouseEventHandler;
  className?: string;
}

function AppHeaderBackBtn({onClick, className}: IAppHeaderBackBtn) {
  return (
    <button className={className} onClick={onClick}>
      <IconRoundedRight className="w-8 h-8 text-white drop-shadow-[-1px_4px_2px_#575F6B]" />
    </button>
  );
}

export default AppHeaderBackBtn;
