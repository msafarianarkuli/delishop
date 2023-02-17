import SupermarketCategoryHeader from "view/supermarketCategory/component/SupermarketCategoryHeader";
import SupermarketCategorySubCategory from "view/supermarketCategory/component/SupermarketCategorySubCategory";

function SupermarketCategory() {
  return (
    <>
      <SupermarketCategoryHeader />
      <div className="mt-headerNormal">
        <SupermarketCategorySubCategory />
      </div>
    </>
  );
}

export default SupermarketCategory;
