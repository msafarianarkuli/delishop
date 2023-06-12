import {MouseEventHandler} from "react";
import classNames from "classnames";
import {Button} from "antd";
import {IconClose} from "assets/icons";
import styles from "view/vendor/vendor.module.scss";

interface VendorFilterBtn {
  title: string;
  selected?: boolean;
  onClick?: MouseEventHandler;
}

function VendorFilterBtn({title, onClick, selected}: VendorFilterBtn) {
  const container = classNames({
    [styles.vendor_filter_btn]: true,
    [styles.vendor_filter_btn_selected]: selected,
    [styles.vendor_filter_btn_unselect]: !selected,
  });
  return (
    <Button onClick={onClick} className={container}>
      {title}
      {selected ? (
        <div className="flex items-center justify-center p-1 mr-2 bg-[#CD4B03] rounded-full">
          <IconClose className="w-2 h-2" />
        </div>
      ) : null}
    </Button>
  );
}

export default VendorFilterBtn;
