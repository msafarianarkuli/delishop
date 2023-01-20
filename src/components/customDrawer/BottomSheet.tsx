import {CustomDrawer} from "components/index";
import {ICustomDrawer} from "components/customDrawer/CustomDrawer";
import {IconClose} from "assets/icons";
import classNames from "classnames";
import {DrawerProps} from "antd";

interface IBottomSheet extends Omit<ICustomDrawer, "placement" | "closable" | "onClose" | "headerStyle"> {
  title?: string;
  classNameTitle?: string;
  onClose?: DrawerProps["onClose"];
}

function BottomSheet(props: IBottomSheet) {
  const {title, classNameTitle = "", children, onClose, bodyStyle, className = "", ...rest} = props;
  const titleClassName = classNames({
    "text-[15px] font-bold": true,
    [classNameTitle]: classNameTitle,
  });

  const tmpClassName = classNames({
    "bg-transparent rounded-t-[15px]": true,
    [className]: className,
  });
  return (
    <>
      <CustomDrawer
        {...rest}
        bodyStyle={{
          padding: "20px 18px",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: "white",
          boxShadow: "0px -4px 8px #DCDCDC",
          ...bodyStyle,
        }}
        onClose={onClose}
        closable={false}
        placement="bottom"
        className={tmpClassName}
      >
        <div className="flex items-center justify-between pb-[20px] border-b border-borderColor">
          {title ? <div className={titleClassName}>{title}</div> : null}
          <button onClick={onClose}>
            <IconClose className="w-4 h-4 text-textColor" />
          </button>
        </div>
        {children}
      </CustomDrawer>
    </>
  );
}

export default BottomSheet;
