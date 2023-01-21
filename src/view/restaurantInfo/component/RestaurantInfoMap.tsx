import {Map} from "components";

function RestaurantInfoMap() {
  return (
    <>
      <Map
        className="w-full h-[278px] rounded-b-[20px] shadow-xl"
        zoom={17}
        points={[[{title: "لوکیشن من", latitude: 35.704431, longitude: 51.392746}]]}
      />
    </>
  );
}

export default RestaurantInfoMap;
