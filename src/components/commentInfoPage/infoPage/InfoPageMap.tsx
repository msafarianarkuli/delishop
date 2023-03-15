import React, {useMemo} from "react";
import {Map} from "components/index";

export interface IInfoPageMap {
  lat: number;
  lng: number;
}

function InfoPageMap({lng, lat}: IInfoPageMap) {
  const point = useMemo(() => {
    if (lat && lat) {
      return [{lat, lng}];
    }
    return [];
  }, [lat, lng]);

  return (
    <>
      <Map className="w-full h-[180px] z-0 rounded-b-[20px] shadow-xl" zoom={17} points={[point]} zoomControl={false} />
    </>
  );
}

export default InfoPageMap;
