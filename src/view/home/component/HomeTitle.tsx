import classNames from "classnames";

interface IHomeTitle {
  title: string;
  className?: string;
}

function HomeTitle(props: IHomeTitle) {
  const {title, className = ""} = props;
  const container = classNames({
    "flex items-center": true,
    [className]: className,
  });

  return (
    <div className={container}>
      <div className="w-[7px] h-[7px] rounded-full bg-primary ml-2" />
      <span className="text-[16px] font-bold">{title}</span>
    </div>
  );
}

export default HomeTitle;
