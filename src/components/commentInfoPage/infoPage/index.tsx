import React from "react";
import CommentInfoPageHeader from "components/commentInfoPage/commentInfoPageHeader";
import InfoPageMap, {IInfoPageMap} from "components/commentInfoPage/infoPage/InfoPageMap";
import InfoPageAddress, {IInfoPageAddress} from "components/commentInfoPage/infoPage/InfoPageAddress";
import InfoPageDetail, {IInfoPageDetail} from "components/commentInfoPage/infoPage/InfoPageDetail";
import InfoPageCoin, {IInfoPageCoin} from "components/commentInfoPage/infoPage/InfoPageCoin";

interface IInfoPage extends IInfoPageMap, IInfoPageAddress, IInfoPageDetail, IInfoPageCoin {
  baseUrl: string;
  notfound: boolean;
}

function InfoPage(props: IInfoPage) {
  const {baseUrl, notfound, lng, lat, open, openHours, address, maxSendTime, minCart, tags, name, logo, point} = props;
  return (
    <>
      <CommentInfoPageHeader baseUrl={baseUrl} active="info" />
      <div className="mt-headerNormal">
        {notfound ? (
          <div>موردی یافت نشد</div>
        ) : (
          <>
            <InfoPageMap lat={lat} lng={lng} />
            <InfoPageAddress open={open} address={address} openHours={openHours} />
            <InfoPageDetail maxSendTime={maxSendTime} minCart={minCart} tags={tags} name={name} logo={logo} />
            <InfoPageCoin name={name} point={point} />
          </>
        )}
      </div>
    </>
  );
}

export default InfoPage;
