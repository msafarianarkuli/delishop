import React, {ForwardedRef, forwardRef} from "react";
import {Control, FieldValues, RegisterOptions, useController} from "react-hook-form";
import {FieldPath, FieldPathValue} from "react-hook-form/dist/types";
import CustomTextArea, {IBasicCustomTextArea, ICustomTextAreaClassNames} from "lib/customTextArea/CustomTextArea";
import {TextAreaRef} from "antd/lib/input/TextArea";

export interface ICustomTextAreaReactHook<C extends FieldValues, N extends FieldPath<C>> extends IBasicCustomTextArea {
  id: N;
  control: Control<C>;
  defaultValue?: FieldPathValue<C, N>;
  rules?: Omit<RegisterOptions<C, N>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  classNameError?: string;
  classNameContainer?: string;
  customTextAreaClassNames?: ICustomTextAreaClassNames;
}

function TextAreaReactHook<C extends FieldValues, N extends FieldPath<C>>(
  props: ICustomTextAreaReactHook<C, N>,
  ref: ForwardedRef<TextAreaRef>
) {
  const {
    id,
    control,
    defaultValue,
    rules,
    customTextAreaClassNames = {},
    classNameContainer,
    classNameError,
    ...rest
  } = props;

  const {
    field,
    fieldState: {error},
  } = useController<C, N>({
    control,
    name: id,
    defaultValue,
    rules,
  });

  return (
    <div className={classNameContainer}>
      <CustomTextArea
        ref={ref}
        id={field.name}
        value={field.value || ""}
        onBlur={field.onBlur}
        onChange={field.onChange}
        {...customTextAreaClassNames}
        {...rest}
      />
      {error?.message ? <div className={classNameError}>{error.message}</div> : null}
    </div>
  );
}

export const CustomTextAreaReactHook = forwardRef(TextAreaReactHook) as <C extends FieldValues, N extends FieldPath<C>>(
  props: ICustomTextAreaReactHook<C, N> & {ref?: ForwardedRef<TextAreaRef>}
) => ReturnType<typeof TextAreaReactHook>;

export default CustomTextAreaReactHook;
