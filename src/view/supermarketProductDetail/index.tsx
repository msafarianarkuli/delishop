import SupermarketProductDetailHeader from "view/supermarketProductDetail/component/SupermarketProductDetailHeader";
import SupermarketProductDetailSwiper from "view/supermarketProductDetail/component/SupermarketProductDetailSwiper";

function SupermarketProductDetail() {
  return (
    <>
      <SupermarketProductDetailHeader />
      <div className="mt-headerNormal">
        <SupermarketProductDetailSwiper />
      </div>
    </>
  );
}

export default SupermarketProductDetail;
