import {useFormContext} from "react-hook-form";
import {Button} from "antd";
import useTypeColor from "hooks/useTypeColor";
import classNames from "classnames";

function OrderRateSubmit() {
  const typeColor = useTypeColor();
  const {
    formState: {isSubmitting},
  } = useFormContext();

  const className = classNames({
    "w-full mb-5": true,
    "submit-btn": typeColor === "default",
    "submit-btn-supermarket": typeColor === "supermarket",
  });

  return (
    <Button loading={isSubmitting} type="primary" htmlType="submit" className={className}>
      ثبت
    </Button>
  );
}

export default OrderRateSubmit;
