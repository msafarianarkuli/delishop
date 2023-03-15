import React from "react";
import OrderCompleteSuggestionCard from "view/orderComplete/component/orderCompleteSuggestionCard/OrderCompleteSuggestionCard";
import img from "assets/images/suggestion.png";
import OrderCompleteTitle from "view/orderComplete/component/OrderCompleteTitle";
import useTypeColor from "hooks/useTypeColor";

const data = Array.from(new Array(5), (_, i) => ({
  id: i + 1,
  title: "سالاد سیب زمینی(روسی)",
  image: img.src,
  price: 38000,
}));

function OrderCompleteSuggestion() {
  const type = useTypeColor();

  return (
    <div className="mt-7">
      <OrderCompleteTitle type={type} title="پیشنهاد برای افزودن به سبد خرید" />
      <div className="flex items-center flex-warp overflow-auto pr-screenSpace pb-5 pt-2">
        {data.map((item, index) => {
          return (
            <OrderCompleteSuggestionCard
              type={type}
              key={index}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OrderCompleteSuggestion;
