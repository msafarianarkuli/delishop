import RestaurantCompleteList from "view/restaurantComplete/component/RestaurantCompleteList";
import RestaurantCompleteSuggestion from "view/restaurantComplete/component/RestaurantCompleteSuggestion";
import RestaurantCompleteDescription from "view/restaurantComplete/component/RestaurantCompleteDescription";
import RestaurantCompleteDeliveryTime from "view/restaurantComplete/component/RestaurantCompleteDeliveryTime";

function RestaurantCompletePartOne() {
  return (
    <>
      <RestaurantCompleteList />
      <RestaurantCompleteSuggestion />
      <RestaurantCompleteDescription />
      <RestaurantCompleteDeliveryTime />
    </>
  );
}

export default RestaurantCompletePartOne;
