import {ForwardedRef, forwardRef} from "react";
import CustomInput, {IBasicCustomInput, ICustomInputClassNames} from "components/customInput/CustomInput";
import {InputRef} from "antd";
import {Control, FieldValues, RegisterOptions, useController} from "react-hook-form";
import {FieldPath, FieldPathValue} from "react-hook-form/dist/types";
import {onlyNumberValue} from "utils/utils";
import classNames from "classnames";

export interface ICustomInputReactHook<C extends FieldValues, N extends FieldPath<C>> extends IBasicCustomInput {
  id: N;
  control: Control<C>;
  defaultValue?: FieldPathValue<C, N>;
  rules?: Omit<RegisterOptions<C, N>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  classNameError?: string;
  classNameContainer?: string;
  numberWithComma?: boolean;
  numerical?: boolean;
  customInputClassNames?: ICustomInputClassNames;
}

function InputReactHook<C extends FieldValues, N extends FieldPath<C>>(
  props: ICustomInputReactHook<C, N>,
  ref: ForwardedRef<InputRef>
) {
  const {
    id,
    control,
    defaultValue,
    rules,
    numberWithComma = false,
    numerical = false,
    maxLength = 0,
    customInputClassNames = {},
    classNameContainer,
    classNameError = "",
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

  const errorClassName = classNames({
    "text-[13px] text-error font-normal mt-2": true,
    [classNameError]: classNameError,
  });
  return (
    <div className={classNameContainer}>
      <CustomInput
        ref={ref}
        id={field.name}
        value={field.value || ""}
        status={error?.message ? "error" : undefined}
        onChange={(event) => {
          const text = event.target.value;
          let tmp = "";
          let finalValue = "";

          if (numberWithComma || numerical) {
            tmp = onlyNumberValue(text);
          } else {
            tmp = text;
          }

          if (text.startsWith(" ")) {
            tmp = tmp.trim();
          }

          if (maxLength) {
            if (tmp.length <= maxLength) {
              finalValue = tmp;
            } else {
              finalValue = field.value;
            }
          } else {
            finalValue = tmp;
          }

          // set finalValue
          if (numberWithComma) {
            // finalValue = numberWithCommas(finalValue);
            const tmp = +finalValue;
            finalValue = tmp.toLocaleString("en-US");
          }
          // createLog('finalValue', finalValue)
          field.onChange({
            ...event,
            target: {
              ...event.target,
              value: finalValue,
            },
          });
        }}
        onBlur={field.onBlur}
        {...customInputClassNames}
        {...rest}
      />
      {error?.message ? <div className={errorClassName}>{error.message}</div> : null}
    </div>
  );
}

const CustomInputReactHook = forwardRef(InputReactHook) as <C extends FieldValues, N extends FieldPath<C>>(
  props: ICustomInputReactHook<C, N> & {ref?: ForwardedRef<InputRef>}
) => ReturnType<typeof InputReactHook>;
export default CustomInputReactHook;
