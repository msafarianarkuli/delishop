import classNames from "classnames";

const data = [
  {
    id: 1,
    title: "همه",
  },
  {
    id: 2,
    title: "دستمال کاغذی",
  },
  {
    id: 3,
    title: "دستمال توالت",
  },
  {
    id: 4,
    title: "مایع دستشویی",
  },
];

function SupermarketCategorySubCategory() {
  return (
    <div className="flex items-center h-headerNormal border-b border-borderColor overflow-auto pr-screenSpace">
      {data.map((item, index) => {
        const container = classNames({
          "border rounded-full font-medium text-[15px] py-1 px-3 ml-3 whitespace-nowrap": true,
          "border-iconColor text-iconColor": index !== 0,
          "border-primarySupermarket bg-primarySupermarket/10 text-primarySupermarket": index === 0,
        });
        return (
          <div key={index} className={container}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default SupermarketCategorySubCategory;
