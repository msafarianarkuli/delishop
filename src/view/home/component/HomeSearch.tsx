import {Button} from "antd";
import {IconSearch} from "assets/icons";

function HomeSearch() {
  return (
    <div className="pt-headerNormal px-screenSpace">
      <Button className="flex items-center w-full border-0 rounded-full h-[60px] inner_box text-textColorLight px-5 mt-5">
        <IconSearch className="w-7 h-auto" />
        <span className="mr-2">جستجو</span>
      </Button>
    </div>
  );
}

export default HomeSearch;
