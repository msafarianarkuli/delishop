import React, {MouseEventHandler} from "react";
import {AppHeader, AppHeaderBackBtn, AppHeaderDelete} from "components";

function RestaurantCompleteHeader({onClick}: {onClick: MouseEventHandler}) {
  return (
    <div className="fixed z-[10000] top-0 right-0 left-0 header_background">
      <AppHeader left={<AppHeaderDelete />} body="تکمیل خرید" right={<AppHeaderBackBtn onClick={onClick} />} />
    </div>
  );
}

export default RestaurantCompleteHeader;
