import {useFormContext} from "react-hook-form";
import {Button} from "antd";

function OrderRateSubmit() {
  const {
    formState: {isSubmitting},
  } = useFormContext();

  return (
    <Button loading={isSubmitting} type="primary" htmlType="submit" className="submit-btn w-full mb-5">
      ثبت
    </Button>
  );
}

export default OrderRateSubmit;
