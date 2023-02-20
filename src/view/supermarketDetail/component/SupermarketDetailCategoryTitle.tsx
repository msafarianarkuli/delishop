function SupermarketDetailCategoryTitle({title}: {title: string}) {
  return (
    <div className="flex items-center my-6 px-screenSpace">
      <div className="w-[7px] h-[7px] bg-primarySupermarket rounded-full ml-1" />
      <span className="text-[17px] font-bold">{title}</span>
    </div>
  );
}

export default SupermarketDetailCategoryTitle;
