import {CustomInputReactHook} from "components";
import {RegisterOptions, useFormContext} from "react-hook-form";
import classNames from "classnames";

interface IAddressMapFormInput {
  id: string;
  classNameContainer?: string;
  className?: string;
  label: string;
  placeholder?: string;
  rules?: Omit<RegisterOptions, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
}

function AddressMapFormInput(props: IAddressMapFormInput) {
  const {id, classNameContainer, label, rules, placeholder, className = ""} = props;
  const {control} = useFormContext();

  const input = classNames({
    "input-form": true,
    [className]: className,
  });

  return (
    <>
      <CustomInputReactHook
        id={id}
        control={control}
        classNameContainer={classNameContainer}
        className={input}
        label={label}
        inputMode="text"
        rules={rules}
        placeholder={placeholder}
      />
    </>
  );
}

export default AddressMapFormInput;
