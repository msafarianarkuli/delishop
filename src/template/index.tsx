import {ReactNode} from "react";
import AntConfig from "template/AntConfig";
import Drawer from "template/Drawer";
import LocalStorageData from "template/LocalStorageData";
import UserCoinProvider from "template/context/UserCoinProvider";
import UserWalletProvider from "template/context/UserWalletProvider";
import {iranSans} from "assets/fonts/iranSansFont";

interface ITemplate {
  children: ReactNode;
}

function Template({children}: ITemplate) {
  return (
    <AntConfig>
      <LocalStorageData />
      <UserCoinProvider>
        <UserWalletProvider>
          <Drawer />
          <div
            className={`template min-h-screen antialiased ${iranSans.variable} font-IranSans text-[14px] text-textColor`}
          >
            <div className="max-width-screen">{children}</div>
          </div>
        </UserWalletProvider>
      </UserCoinProvider>
    </AntConfig>
  );
}

export default Template;
