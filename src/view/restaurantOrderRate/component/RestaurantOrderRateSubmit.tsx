import {Button} from "antd";
import {useFormContext} from "react-hook-form";

function RestaurantOrderRateSubmit() {
  const {
    formState: {isSubmitting},
  } = useFormContext();

  return (
    <Button loading={isSubmitting} type="primary" htmlType="submit" className="submit-btn w-full mb-5">
      ثبت
    </Button>
  );
}

export default RestaurantOrderRateSubmit;
