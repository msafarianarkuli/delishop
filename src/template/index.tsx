import {ReactNode} from "react";
import AntConfig from "template/AntConfig";
import Drawer from "template/Drawer";
import LocalStorageData from "template/LocalStorageData";
import UserCoinProvider from "template/context/UserCoinProvider";

interface ITemplate {
  children: ReactNode;
}

function Template({children}: ITemplate) {
  return (
    <AntConfig>
      <LocalStorageData />
      <UserCoinProvider>
        <Drawer />
        <div className="template min-h-screen anti aliased font-IranSans text-[14px] text-textColor">
          <div className="max-width-screen">{children}</div>
        </div>
      </UserCoinProvider>
    </AntConfig>
  );
}

export default Template;
