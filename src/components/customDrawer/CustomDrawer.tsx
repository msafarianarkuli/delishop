import React, {useEffect, useState} from "react";
import {Drawer, DrawerProps} from "antd";

export interface ICustomDrawer extends DrawerProps {}

function CustomDrawer(props: ICustomDrawer) {
  const {children, ...rest} = props;
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) return null;
  return (
    <>
      <Drawer {...rest}>{children}</Drawer>
    </>
  );
}

export default CustomDrawer;
