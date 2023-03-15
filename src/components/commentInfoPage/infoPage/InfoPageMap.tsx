import React, {useEffect, useMemo, useState} from "react";
import {Map} from "components/index";
import superMarketPin from "assets/images/superMarketPin.svg";
import {ICommentInfoPageType} from "components/commentInfoPage/intefaceCommentInfoPage";

export interface IInfoPageMap extends ICommentInfoPageType {
  lat: number;
  lng: number;
}

function InfoPageMap({lng, lat, type}: IInfoPageMap) {
  const [pin, setPin] = useState<string[]>([]);

  useEffect(() => {
    if (type === "supermarket") {
      setPin([superMarketPin.src]);
    }
  }, [type]);

  const point = useMemo(() => {
    if (lat && lat) {
      return [{lat, lng}];
    }
    return [];
  }, [lat, lng]);

  return (
    <>
      <Map
        className="w-full h-[180px] z-0 rounded-b-[20px] shadow-xl"
        zoom={17}
        points={[point]}
        pinIcons={pin}
        zoomControl={false}
      />
    </>
  );
}

export default InfoPageMap;
