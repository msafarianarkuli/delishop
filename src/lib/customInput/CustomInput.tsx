import {Input, InputProps, InputRef} from "antd";
import React, {ForwardedRef, forwardRef} from "react";

export interface ICustomInputClassNames {
  classNameContainer?: string;
  classNameLabel?: string;
}

export interface IBasicCustomInput extends InputProps {
  id: string;
  label?: string;
}

export interface ICustomInput extends IBasicCustomInput, ICustomInputClassNames {}

const CustomInput = forwardRef((props: ICustomInput, ref: ForwardedRef<InputRef>) => {
  const {classNameContainer, label, id, classNameLabel, ...rest} = props;

  return (
    <>
      <div className={classNameContainer}>
        {label ? (
          <label htmlFor={id} className={classNameLabel}>
            {label}
          </label>
        ) : null}
        <Input ref={ref} id={id} name={id} {...rest} />
      </div>
    </>
  );
});

CustomInput.displayName = "CustomInput";

export default CustomInput;
