import React from "react";
import RestaurantCompleteSuggestionCard from "view/restaurantComplete/component/restaurantCompleteSuggestionCard/RestaurantCompleteSuggestionCard";
import img from "assets/images/suggestion.png";
import RestaurantCompleteTitle from "view/restaurantComplete/component/RestaurantCompleteTitle";

const data = Array.from(new Array(5), (_, i) => ({
  id: i + 1,
  title: "سالاد سیب زمینی(روسی)",
  image: img.src,
  price: 38000,
}));

function RestaurantCompleteSuggestion() {
  return (
    <div className="mt-7">
      <RestaurantCompleteTitle title="پیشنهاد برای افزودن به سبد خرید" />
      <div className="flex items-center flex-warp overflow-auto pr-screenSpace pb-5 pt-2">
        {data.map((item, index) => {
          return (
            <RestaurantCompleteSuggestionCard key={index} title={item.title} price={item.price} image={item.image} />
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantCompleteSuggestion;
