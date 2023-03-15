import React from "react";
import {IconStar} from "assets/icons";

interface ICommentPageRateItem {
  percent: number;
  star: number;
  color: string;
}

function CommentPageRateItem(props: ICommentPageRateItem) {
  const {percent, star, color} = props;
  return (
    <div className="flex items-center text-[13px] mb-1">
      <div>{percent}%</div>
      <div className="flex flex-1 flex-row-reverse h-[3px] bg-[#D0D2DB] mx-2 rounded-full overflow-hidden">
        <div className="h-full" style={{width: `${percent}%`, backgroundColor: color}} />
      </div>
      <div className="ml-1" style={{color}}>
        <IconStar className="w-3 h-3" />
      </div>
      <span className="h-[15px]">{star}</span>
    </div>
  );
}

function CommentPageRate() {
  return (
    <div className="pt-5">
      <CommentPageRateItem percent={29} star={5} color="#005E38" />
      <CommentPageRateItem percent={34} star={4} color="#71E100" />
      <CommentPageRateItem percent={18} star={3} color="#FCD81D" />
      <CommentPageRateItem percent={15} star={2} color="#FF6B00" />
      <CommentPageRateItem percent={9} star={1} color="#D90202" />
    </div>
  );
}

export default CommentPageRate;
