import React, {forwardRef} from "react";
import {Input} from "antd";
import {TextAreaProps} from "antd/lib/input";
import {TextAreaRef} from "antd/lib/input/TextArea";

const {TextArea} = Input;

export interface ICustomTextAreaClassNames {
  classNameContainer?: string;
  classNameLabel?: string;
}

export interface IBasicCustomTextArea extends TextAreaProps {
  id: string;
  label?: string;
}

export interface ICustomTextArea extends IBasicCustomTextArea, ICustomTextAreaClassNames {}

const CustomTextArea = forwardRef<TextAreaRef, ICustomTextArea>((props, ref) => {
  const {id, label, classNameLabel, classNameContainer, ...rest} = props;
  return (
    <>
      <div className={classNameContainer}>
        {label ? (
          <label htmlFor={id} className={classNameLabel}>
            {label}
          </label>
        ) : null}
        <TextArea ref={ref} id={id} name={id} {...rest} />
      </div>
    </>
  );
});

CustomTextArea.displayName = "CustomTextArea";

export default CustomTextArea;
