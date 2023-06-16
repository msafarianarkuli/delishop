import styles from "view/vendorDetail/vendorDetailSupermarket/component/vendorDetailSupermarketCard/vendorDetailSupermarketCard.module.scss";

interface IVendorDetailSupermarketCard {
  title: string;
  image?: string;
}

function VendorDetailSupermarketCard(props: IVendorDetailSupermarketCard) {
  const {image, title} = props;
  return (
    <div className={styles.vendor_detail_supermarket_card_container}>
      <div className="absolute flex flex-col justify-between w-full h-full">
        <div className="relative flex flex-1">
          <div className="absolute w-full h-[230%] -top-[100%]">
            <img src={image} alt={title} className="w-full h-full object-center object-cover" />
          </div>
        </div>
        <div className="text-center mb-2 font-semibold text-[13px]">{title}</div>
      </div>
    </div>
  );
}

export default VendorDetailSupermarketCard;
