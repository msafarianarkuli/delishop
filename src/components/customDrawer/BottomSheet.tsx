import {CustomDrawer} from "components/index";
import {ICustomDrawer} from "components/customDrawer/CustomDrawer";
import {IconClose} from "assets/icons";
import classNames from "classnames";
import {DrawerProps} from "antd";
import {iranSans} from "assets/fonts/iranSansFont";
import IconAngleDown from "assets/icons/IconAngleDown";

interface IBottomSheet extends Omit<ICustomDrawer, "placement" | "closable" | "onClose" | "headerStyle"> {
  title?: string;
  classNameTitle?: string;
  onClose?: DrawerProps["onClose"];
  isProduct?: boolean;
}

function BottomSheet(props: IBottomSheet) {
  const {title, classNameTitle = "", children, onClose, bodyStyle, className = "", isProduct, ...rest} = props;
  const titleClassName = classNames({
    "text-[15px] font-bold": true,
    [classNameTitle]: classNameTitle,
  });

  const tmpClassName = classNames({
    [`${iranSans.variable} font-IranSans`]: true,
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
        {isProduct ? (
          <div className="flex items-center justify-center pb-4">
            <button onClick={onClose}>
              <IconAngleDown className="w-5 h-5 text-textColor" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between pb-[20px] border-b border-borderColor]">
            {title ? <div className={titleClassName}>{title}</div> : null}
            <button onClick={onClose}>
              <IconClose className="w-4 h-4 text-textColor" />
            </button>
          </div>
        )}
        {children}
      </CustomDrawer>
    </>
  );
}

export default BottomSheet;
