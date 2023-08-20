import React, {useMemo} from "react";
import CommentInfoPageHeader from "components/commentInfoPage/commentInfoPageHeader";
import InfoPageMap, {IInfoPageMap} from "components/commentInfoPage/infoPage/InfoPageMap";
import InfoPageAddress, {IInfoPageAddressBase} from "components/commentInfoPage/infoPage/InfoPageAddress";
import InfoPageDetail, {IInfoPageDetail} from "components/commentInfoPage/infoPage/InfoPageDetail";
import InfoPageCoin, {IInfoPageCoinBase} from "components/commentInfoPage/infoPage/InfoPageCoin";
import {ICommentInfoPageType} from "components/commentInfoPage/intefaceCommentInfoPage";

interface IInfoPage
  extends IInfoPageMap,
    IInfoPageAddressBase,
    IInfoPageDetail,
    IInfoPageCoinBase,
    ICommentInfoPageType {
  baseUrl: string;
  notfound: boolean;
}

function InfoPage(props: IInfoPage) {
  const {
    baseUrl,
    notfound,
    lng,
    lat,
    open,
    openHours,
    address,
    maxSendTime,
    minCart,
    tags,
    name,
    logo,
    point,
    type,
    about,
  } = props;
  const primaryColor = useMemo(() => {
    let color = "";
    if (type === "restaurant") color = "text-primary";
    if (type === "supermarket") color = "text-primarySupermarket";
    return color;
  }, [type]);

  return (
    <>
      <CommentInfoPageHeader baseUrl={baseUrl} active="info" />
      <div className="mt-headerNormal">
        {notfound ? (
          <div>موردی یافت نشد</div>
        ) : (
          <>
            <InfoPageMap type={type} lat={lat} lng={lng} />
            <InfoPageAddress color={primaryColor} open={open} address={address} openHours={openHours} />
            <InfoPageDetail
              maxSendTime={maxSendTime}
              minCart={minCart}
              tags={tags}
              name={name}
              logo={logo}
              about={about}
            />
            <InfoPageCoin color={primaryColor} name={name} point={point} />
          </>
        )}
      </div>
    </>
  );
}

export default InfoPage;
