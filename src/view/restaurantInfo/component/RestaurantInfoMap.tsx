import {Map} from "components";

function RestaurantInfoMap() {
  return (
    <>
      <Map
        className="w-full h-[180px] z-0 rounded-b-[20px] shadow-xl"
        zoom={17}
        points={[[{title: "لوکیشن من", lat: 35.704431, lng: 51.392746}]]}
      />
    </>
  );
}

export default RestaurantInfoMap;
