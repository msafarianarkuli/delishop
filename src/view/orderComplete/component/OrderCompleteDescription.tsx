import OrderCompleteTitle from "view/orderComplete/component/OrderCompleteTitle";
import {CustomTextArea} from "components";
import {useState} from "react";

function OrderCompleteDescription() {
  const [text, setText] = useState<string>("");
  return (
    <div className="mt-3">
      <OrderCompleteTitle title="توضیحات" />
      <div className="px-screenSpace">
        <CustomTextArea
          id="description"
          value={text}
          onChange={(e) => {
            const value = e.target.value;
            setText(value);
          }}
          className="border-0 border-b rounded-none shadow-none bg-transparent resize-none"
          placeholder="توضیحات سفارش خود را اینجا بنویسید."
          rows={2}
        />
      </div>
    </div>
  );
}

export default OrderCompleteDescription;
