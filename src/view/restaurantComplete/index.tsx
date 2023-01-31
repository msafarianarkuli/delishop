import RestaurantCompleteHeader from "view/restaurantComplete/component/RestaurantCompleteHeader";
import RestaurantCompleteList from "view/restaurantComplete/component/RestaurantCompleteList";
import RestaurantCompleteSuggestion from "view/restaurantComplete/component/RestaurantCompleteSuggestion";
import RestaurantCompleteDescription from "view/restaurantComplete/component/RestaurantCompleteDescription";
import RestaurantCompleteDeliveryTime from "view/restaurantComplete/component/RestaurantCompleteDeliveryTime";
import RestaurantCompleteSubmitBtn from "view/restaurantComplete/component/RestaurantCompleteSubmitBtn";

function RestaurantComplete() {
  return (
    <>
      <RestaurantCompleteHeader />
      <RestaurantCompleteList />
      <RestaurantCompleteSuggestion />
      <RestaurantCompleteDescription />
      <RestaurantCompleteDeliveryTime />
      <RestaurantCompleteSubmitBtn />
    </>
  );
}

export default RestaurantComplete;
