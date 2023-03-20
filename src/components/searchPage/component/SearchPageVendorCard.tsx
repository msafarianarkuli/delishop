import React from "react";
import {IconShop} from "assets/icons";

interface ISearchPageVendorCard {
  title: string;
}

function SearchPageVendorCard(props: ISearchPageVendorCard) {
  const {title} = props;
  return (
    <div className="flex items-center border-b border-borderColor py-5">
      <IconShop className="w-5 h-5 text-iconColor" />
      <span className="mr-4">{title}</span>
    </div>
  );
}

export default SearchPageVendorCard;
