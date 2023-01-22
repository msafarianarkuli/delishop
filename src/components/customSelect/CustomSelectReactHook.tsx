import React, {forwardRef, Ref} from "react";
import {CustomSelect} from "components/index";
import {IBasicCustomSelect, ICustomSelectClassName} from "components/customSelect/CustomSelect";
import {Control, FieldValues, RegisterOptions, useController} from "react-hook-form";
import {FieldPath, FieldPathValue} from "react-hook-form/dist/types";
import classNames from "classnames";
import {BaseSelectRef} from "rc-select";

interface ICustomSelectReactHook<C extends FieldValues, N extends FieldPath<C>> extends IBasicCustomSelect {
  id: N;
  control: Control<C>;
  defaultValue?: FieldPathValue<C, N>;
  rules?: Omit<RegisterOptions<C, N>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  classNameContainer?: string;
  classNameError?: string;
  classNameCustomSelect?: ICustomSelectClassName;
}

function SelectReactHook<C extends FieldValues, N extends FieldPath<C>>(
  props: ICustomSelectReactHook<C, N>,
  ref: Ref<BaseSelectRef>
) {
  const {
    id,
    control,
    defaultValue,
    rules,
    classNameCustomSelect = {},
    classNameContainer,
    classNameError = "",
    ...rest
  } = props;
  const {
    field,
    fieldState: {error},
  } = useController<C, N>({
    name: id,
    control,
    defaultValue,
    rules,
  });

  const errorClassName = classNames({
    "text-[13px] text-error font-normal mt-2": true,
    [classNameError]: classNameError,
  });

  return (
    <div className={classNameContainer}>
      <CustomSelect
        {...rest}
        {...classNameCustomSelect}
        ref={ref}
        value={field.value}
        onBlur={field.onBlur}
        onChange={field.onChange}
      />
      {error?.message ? <div className={errorClassName}>{error.message}</div> : null}
    </div>
  );
}

const CustomSelectReactHook = forwardRef(SelectReactHook) as <C extends FieldValues, N extends FieldPath<C>>(
  props: ICustomSelectReactHook<C, N> & {ref?: Ref<BaseSelectRef>}
) => ReturnType<typeof SelectReactHook>;

export default CustomSelectReactHook;
