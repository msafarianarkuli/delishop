import {Button} from "antd";
import classNames from "classnames";
import {TUseTypeColor} from "hooks/useTypeColor";

interface IAddressMapSubmit {
  type: TUseTypeColor;
}

function AddressMapSubmit({type}: IAddressMapSubmit) {
  const container = classNames({
    "pointer-events-auto w-full": true,
    "submit-btn": type === "default",
    "submit-btn-supermarket": type === "supermarket",
  });

  return (
    <Button type="primary" className={container}>
      تایید آدرس
    </Button>
  );
}

export default AddressMapSubmit;
