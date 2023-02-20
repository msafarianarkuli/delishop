import {IconRoundedLeft} from "assets/icons";

interface ISupermarketCategoryItemHeader {
  title: string;
}

function SupermarketCategoryItemHeader(props: ISupermarketCategoryItemHeader) {
  const {title} = props;
  return (
    <div className="flex items-center justify-between mt-5 px-screenSpace">
      <div className="flex items-center">
        <div className="w-[7px] h-[7px] bg-primarySupermarket rounded-full" />
        <span className="text-[17px] font-bold mr-1">{title}</span>
      </div>
      <div className="flex items-center text-primarySupermarket">
        <span className="text-[15px] font-semibold">همه</span>
        <IconRoundedLeft className="w-5 h-5" />
      </div>
    </div>
  );
}

export default SupermarketCategoryItemHeader;
