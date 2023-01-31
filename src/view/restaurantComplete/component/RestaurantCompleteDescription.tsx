import RestaurantCompleteTitle from "view/restaurantComplete/component/RestaurantCompleteTitle";
import {CustomTextArea} from "components";
import {useState} from "react";

function RestaurantCompleteDescription() {
  const [text, setText] = useState<string>("");
  return (
    <div className="mt-3">
      <RestaurantCompleteTitle title="توضیحات" />
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

export default RestaurantCompleteDescription;
