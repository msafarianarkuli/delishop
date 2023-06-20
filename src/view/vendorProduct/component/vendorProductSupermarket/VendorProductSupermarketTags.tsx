const arr = [
  {
    title: "چاکلز",
  },
  {
    title: "کچاپ",
  },
];

function VendorProductSupermarketTags() {
  return (
    <div className="flex flex-wrap mt-7">
      {arr.map((item, index) => {
        return (
          <div key={index} className="border border-borderColor rounded-full py-2 px-5 ml-3 last:ml-0">
            {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default VendorProductSupermarketTags;
