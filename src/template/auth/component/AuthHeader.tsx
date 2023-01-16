import BackBtn from "components/backBtn/BackBtn";
import {MouseEventHandler} from "react";

interface ILoginHeader {
  title?: string;
  onClick?: MouseEventHandler;
}

function AuthHeader({title, onClick}: ILoginHeader) {
  return (
    <div className="flex items-center h-headerNormal px-4">
      <BackBtn onClick={onClick} />
      <div className="flex flex-1 justify-center items-center text-[15px] font-normal">{title}</div>
    </div>
  );
}

export default AuthHeader;
