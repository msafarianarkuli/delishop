import React from "react";
import {DatePicker} from "components/index";
import {Control, FieldValues, RegisterOptions, useController} from "react-hook-form";
import {FieldPath, FieldPathValue} from "react-hook-form/dist/types";
import classNames from "classnames";
import {IDatePicker} from "components/datePicker/DatePicker";

interface IDatePickerReactHook<C extends FieldValues, N extends FieldPath<C>> extends Omit<IDatePicker, "value"> {
  id: N;
  control: Control<C>;
  defaultValue?: FieldPathValue<C, N>;
  rules?: Omit<RegisterOptions<C, N>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  classNameContainer?: string;
  classNameError?: string;
}

function DatePickerReactHook<C extends FieldValues, N extends FieldPath<C>>(props: IDatePickerReactHook<C, N>) {
  const {
    id,
    control,
    defaultValue,
    rules,
    classNameContainer,
    classNameError = "",
    onChange,
    onCancel,
    inputProps,
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

  const input = classNames({
    "input-form": true,
    [inputProps?.className || ""]: inputProps?.className,
  });

  return (
    <div className={classNameContainer}>
      <DatePicker
        id={field.name}
        value={field.value}
        onChange={(value) => {
          // @ts-ignore
          field.onChange(value);
          onChange?.(value);
        }}
        onCancel={(e) => {
          // @ts-ignore
          field.onChange(null);
          onCancel?.(e);
        }}
        inputProps={{
          className: input,
          ...inputProps,
        }}
        {...rest}
      />
      {error?.message ? <div className={errorClassName}>{error.message}</div> : null}
    </div>
  );
}

export default DatePickerReactHook;
