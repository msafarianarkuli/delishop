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
      direction="rtl"
      theme={{
        token: {
          colorPrimary: "#FF5C01",
          borderRadius: 10,
          fontFamily,
          colorText: "#2C3036",
          colorLinkActive: "#FF5C01",
          colorLinkHover: "#FF5C01",
        },
        components: {Input: {colorBorder: "#B0B8C4"}, Select: {colorBorder: "#B0B8C4"}},
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntConfig;
