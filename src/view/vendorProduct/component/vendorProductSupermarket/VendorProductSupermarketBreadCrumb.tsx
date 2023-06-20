import {IconRoundedLeft} from "assets/icons";

const arr = [
  {
    title: "تنقلات",
  },
  {
    title: "چیپس",
  },
];

function VendorProductSupermarketBreadCrumb() {
  return (
    <div className="flex">
      {arr.map((item, index) => {
        return (
          <div key={index} className="flex items-center text-iconColor">
            <span className="text-[11px] font-semibold">{item.title}</span>
            {index !== arr.length - 1 ? <IconRoundedLeft className="w-4 h-4" /> : null}
          </div>
        );
      })}
    </div>
  );
}

export default VendorProductSupermarketBreadCrumb;
