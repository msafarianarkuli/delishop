import OrderCompleteTitle from "view/orderComplete/component/OrderCompleteTitle";
import {CustomTextArea} from "components";
import useTypeColor from "hooks/useTypeColor";
import {
  setOrderCompleteDescription,
  useOrderComplete,
  useOrderCompleteAction,
} from "view/orderComplete/context/OrderCompleteProvider";

function OrderCompleteDescription() {
  const type = useTypeColor();
  const {description} = useOrderComplete();
  const dispatch = useOrderCompleteAction();
  return (
    <div className="mt-3">
      <OrderCompleteTitle type={type} title="توضیحات" />
      <div className="px-screenSpace">
        <CustomTextArea
          id="description"
          value={description}
          onChange={(e) => {
            const value = e.target.value;
            dispatch(setOrderCompleteDescription(value));
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
