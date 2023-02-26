import {RegisterOptions, useFormContext} from "react-hook-form";
import {useEffect, useRef} from "react";
import {InputRef} from "antd";
import useAuthFocus from "view/auth/hooks/useAuthFocus";
import useAuthBlur from "view/auth/hooks/useAuthBlur";
import {CustomInputReactHook} from "components";

interface IRegisterInput {
  id: "name" | "introPhone";
  label: string;
  classNameContainer?: string;
  numerical?: boolean;
  rules?: Omit<RegisterOptions, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
}

function RegisterInput(props: IRegisterInput) {
  const {id, rules, label, classNameContainer, numerical} = props;
  const {control} = useFormContext();
  const ref = useRef<InputRef>(null);

  const focus = useAuthFocus("register-btn");
  const blur = useAuthBlur("register-btn");

  useEffect(() => {
    if (ref.current?.input) {
      const input = ref.current.input;

      input.addEventListener("focus", focus);
      input.addEventListener("blur", blur);

      return () => {
        input.removeEventListener("focus", focus);
        input.removeEventListener("blur", blur);
      };
    }
  }, [blur, focus]);

  return (
    <>
      <CustomInputReactHook
        ref={ref}
        id={id}
        control={control}
        classNameContainer={classNameContainer}
        className="input-form"
        label={label}
        inputMode="text"
        rules={rules}
        numerical={numerical}
      />
    </>
  );
}

export default RegisterInput;
