import {ReactNode} from "react";
import AntConfig from "template/AntConfig";

interface ITemplate {
  children: ReactNode;
}

function Template({children}: ITemplate) {
  return (
    <AntConfig>
      <div className="template min-h-screen anti aliased font-IranSans">{children}</div>
    </AntConfig>
  );
}

export default Template;
