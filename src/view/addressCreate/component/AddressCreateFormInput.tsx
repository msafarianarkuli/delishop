import {RegisterOptions, useFormContext} from "react-hook-form";
import classNames from "classnames";
import {CustomInputReactHook} from "components";

interface IAddressCreateFormInput {
  id: string;
  classNameContainer?: string;
  className?: string;
  label: string;
  placeholder?: string;
  rules?: Omit<RegisterOptions, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  numerical?: boolean;
}

function AddressCreateFormInput(props: IAddressCreateFormInput) {
  const {id, classNameContainer, label, rules, placeholder, className = "", numerical} = props;
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
        numerical={numerical}
      />
    </>
  );
}

export default AddressCreateFormInput;
