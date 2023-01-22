import React, {forwardRef, Ref} from "react";
import {Select, SelectProps} from "antd";
import {BaseSelectRef} from "rc-select";

export interface ICustomSelectClassName {
  classNameLabel?: string;
  classNameContainer?: string;
}

export interface IBasicCustomSelect extends SelectProps {
  label?: string;
}

interface ICustomSelect extends IBasicCustomSelect, ICustomSelectClassName {}

const CustomSelect = forwardRef((props: ICustomSelect, ref: Ref<BaseSelectRef>) => {
  const {label, classNameLabel, classNameContainer, ...rest} = props;
  return (
    <div className={classNameContainer}>
      {label ? <div className={classNameLabel}>{label}</div> : null}
      <Select ref={ref} {...rest} />
    </div>
  );
});

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
