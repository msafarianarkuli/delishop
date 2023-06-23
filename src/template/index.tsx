import {ReactNode, useEffect} from "react";
import AntConfig from "template/AntConfig";
import Drawer from "template/Drawer";
import LocalStorageData from "template/LocalStorageData";
import UserCoinProvider from "template/context/UserCoinProvider";
import UserWalletProvider from "template/context/UserWalletProvider";
import {iranSans} from "assets/fonts/iranSansFont";
import axios from "axios";
import {signOut} from "next-auth/react";

interface ITemplate {
  children: ReactNode;
}

function Template({children}: ITemplate) {
  useEffect(() => {
    axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        console.log("error", error);
        if (
          error &&
          error.response &&
          error.response.status === 401 &&
          error.response.data.message === "Unauthorized"
        ) {
          signOut({
            redirect: true,
            callbackUrl: "/",
          });
        }
        return Promise.reject(error);
      }
    );
  }, []);

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
