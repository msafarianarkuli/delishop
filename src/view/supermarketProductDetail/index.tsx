import SupermarketProductDetailHeader from "view/supermarketProductDetail/component/SupermarketProductDetailHeader";
import SupermarketProductDetailSwiper from "view/supermarketProductDetail/component/SupermarketProductDetailSwiper";
import SupermarketProductDetailBreadCrumb from "view/supermarketProductDetail/component/SupermarketProductDetailBreadCrumb";
import SupermarketProductDetailTitle from "view/supermarketProductDetail/component/SupermarketProductDetailTitle";
import SupermarketProductDetailTags from "view/supermarketProductDetail/component/SupermarketProductDetailTags";
import SupermarketProductDetailPrice from "view/supermarketProductDetail/component/SupermarketProductDetailPrice";

function SupermarketProductDetail() {
  return (
    <>
      <SupermarketProductDetailHeader />
      <div className="mt-headerNormal">
        <SupermarketProductDetailSwiper />
        <div className="px-screenSpace">
          <SupermarketProductDetailBreadCrumb />
          <SupermarketProductDetailTitle />
          <SupermarketProductDetailTags />
          <SupermarketProductDetailPrice price={45500} count={3} />
        </div>
      </div>
    </>
  );
}

export default SupermarketProductDetail;
