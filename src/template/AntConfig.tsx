import {ReactNode} from "react";
import {ConfigProvider} from "antd";

interface IAntConfig {
  children: ReactNode;
}

const fontFamily =
  "IRANSans,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";

function AntConfig({children}: IAntConfig) {
  return (
    <ConfigProvider
      theme={{
        token: {colorPrimary: "#FF5C01", borderRadius: 10, fontFamily},
        components: {Input: {colorBorder: "#575F6B"}},
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntConfig;
