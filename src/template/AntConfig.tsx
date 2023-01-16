import {ReactNode} from "react";
import {ConfigProvider} from "antd";

interface IAntConfig {
  children: ReactNode;
}

function AntConfig({children}: IAntConfig) {
  return <ConfigProvider>{children}</ConfigProvider>;
}

export default AntConfig;
