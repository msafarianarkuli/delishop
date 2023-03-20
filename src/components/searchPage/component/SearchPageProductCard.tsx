import React from "react";

interface ISearchPageProductCard {
  title: string;
  name: string;
  image?: string;
  price?: number;
}

function SearchPageProductCard(props: ISearchPageProductCard) {
  const {name, title, price, image} = props;
  return (
    <div className="flex items-center py-5 border-b border-borderColor">
      <img src={image} alt={title} className="w-[60px] h-[60px] object-center object-cover rounded-[6px]" />
      <div className="flex flex-col flex-1 mr-5">
        <div>{title}</div>
        <div className="flex items-center justify-between mt-3">
          <div className="font-medium text-[12px]">{name}</div>
          <div className="flex items-center whitespace-nowrap text-[12px]">
            <span className="font-semibold">{price?.toLocaleString("en-US")}</span>
            <span className="mr-1 font-light">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPageProductCard;
