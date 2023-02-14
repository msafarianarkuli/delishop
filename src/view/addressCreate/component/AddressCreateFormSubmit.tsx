import {Button} from "antd";
import {useFormContext} from "react-hook-form";
import classNames from "classnames";
import useTypeColor from "hooks/useTypeColor";

function AddressCreateFormSubmit() {
  const {
    formState: {isSubmitting},
  } = useFormContext();
  const type = useTypeColor();

  const container = classNames({
    "w-full mt-2 mb-5": true,
    "submit-btn": type === "default",
    "submit-btn-supermarket": type === "supermarket",
  });

  if (!type) return null;
  return (
    <Button loading={isSubmitting} htmlType="submit" type="primary" className={container}>
      ثبت
    </Button>
  );
}

export default AddressCreateFormSubmit;
