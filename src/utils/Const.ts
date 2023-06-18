export const ReactQueryKey = {
  VENDOR: "VENDOR",
  VENDOR_DETAIL_RESTAURANT: "vendorDetailRestaurant",
  VENDOR_DETAIL_SUPERMARKET: "vendorDetailSupermarket",
  LOGISTIC_CURRENT_PRICE: "logisticCurrentPrice",
  VENDOR_CATEGORY_PRODUCT_LIST: "vendorCategoryProductList",
  VENDOR_SUBCATEGORY_GROUP_PRODUCTS: "vendorSubcategoryGroupProducts",
  VENDOR_COMMENT: "vendorComment",
};

export enum EOrderStatus {
  topay = 1,
  registered,
  confirmed,
  ready,
  sent,
  delivered,
  cancel_by_system,
  cancel_by_vendor,
}

export const OrderStatus = [
  {
    id: EOrderStatus.topay,
    name: "topay",
    title: "در انتظار پرداخت",
  },
  {
    id: EOrderStatus.registered,
    name: "registered",
    title: "ثبت شده",
  },
  {
    id: EOrderStatus.confirmed,
    name: "confirmed",
    title: "تایید شده",
  },
  {
    id: EOrderStatus.ready,
    name: "ready",
    title: "آماده",
  },
  {
    id: EOrderStatus.sent,
    name: "sent",
    title: "ارسال شده",
  },
  {
    id: EOrderStatus.delivered,
    name: "delivered",
    title: "تحویل شده",
  },
  {
    id: EOrderStatus.cancel_by_system,
    name: "cancel_by_system",
    title: "لغو سیستم",
  },
  {
    id: EOrderStatus.cancel_by_vendor,
    name: "cancel_by_vendor",
    title: "لغو وندور",
  },
];

export const instant = "در اسرع وقت";

export enum EVendorsId {
  restaurant = 1,
  supermarket,
  // restaurant vendor
  coffee = 4,
  daily,
  protein,
  fruit,
  confectionery,
  bakery,
  attari,
  flower,
  // supermarket vendor
  tools,
  kharazi,
  homeGoods,
  clothingGoods,
  drug,
  sportsGoods,
  carTools,
  electricalTools,
  culture,
  cosmetic,
}

export const restaurantsVendorIds = [
  EVendorsId.restaurant,
  EVendorsId.coffee,
  EVendorsId.daily,
  EVendorsId.protein,
  EVendorsId.fruit,
  EVendorsId.confectionery,
  EVendorsId.bakery,
  EVendorsId.attari,
  EVendorsId.flower,
];

export const supermarketVendorIds = [
  EVendorsId.supermarket,
  EVendorsId.tools,
  EVendorsId.kharazi,
  EVendorsId.homeGoods,
  EVendorsId.clothingGoods,
  EVendorsId.drug,
  EVendorsId.sportsGoods,
  EVendorsId.carTools,
  EVendorsId.electricalTools,
  EVendorsId.culture,
  EVendorsId.cosmetic,
];

interface IVendorsAddress {
  id: EVendorsId;
  name: string;
  isRestaurant?: boolean;
  isSupermarket?: boolean;
}

export const vendorsAddress: IVendorsAddress[] = [
  {
    id: EVendorsId.restaurant,
    name: "restaurant",
    isRestaurant: true,
  },
  {
    id: EVendorsId.coffee,
    name: "coffee",
    isRestaurant: true,
  },
  {
    id: EVendorsId.daily,
    name: "daily",
    isRestaurant: true,
  },
  {
    id: EVendorsId.protein,
    name: "protein",
    isRestaurant: true,
  },
  {
    id: EVendorsId.fruit,
    name: "fruit",
    isRestaurant: true,
  },
  {
    id: EVendorsId.confectionery,
    name: "confectionery",
    isRestaurant: true,
  },
  {
    id: EVendorsId.bakery,
    name: "bakery",
    isRestaurant: true,
  },
  {
    id: EVendorsId.attari,
    name: "attari",
    isRestaurant: true,
  },
  {
    id: EVendorsId.flower,
    name: "flower",
    isRestaurant: true,
  },
  {
    id: EVendorsId.supermarket,
    name: "supermarket",
    isSupermarket: true,
  },
  {
    id: EVendorsId.tools,
    name: "tools",
    isSupermarket: true,
  },
  {
    id: EVendorsId.kharazi,
    name: "kharazi",
    isSupermarket: true,
  },
  {
    id: EVendorsId.homeGoods,
    name: "homeGoods",
    isSupermarket: true,
  },
  {
    id: EVendorsId.clothingGoods,
    name: "clothingGoods",
    isSupermarket: true,
  },
  {
    id: EVendorsId.carTools,
    name: "carTools",
    isSupermarket: true,
  },
  {
    id: EVendorsId.electricalTools,
    name: "electricalTools",
    isSupermarket: true,
  },
  {
    id: EVendorsId.culture,
    name: "culture",
    isSupermarket: true,
  },
  {
    id: EVendorsId.cosmetic,
    name: "cosmetic",
    isSupermarket: true,
  },
];
