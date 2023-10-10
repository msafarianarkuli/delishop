export const ReactQueryKey = {
  VENDOR: "VENDOR",
  VENDOR_FILTER_SORT: "sort",
  VENDOR_FILTER_TAGE: "tag[]",
  VENDOR_DETAIL_RESTAURANT: "vendorDetailRestaurant",
  VENDOR_DETAIL_SUPERMARKET: "vendorDetailSupermarket",
  LOGISTIC_CURRENT_PRICE: "logisticCurrentPrice",
  LOGISTIC_ALL_PRICES: "logisticAllPrices",
  VENDOR_CATEGORY_PRODUCT_LIST: "vendorCategoryProductList",
  VENDOR_SUBCATEGORY_GROUP_PRODUCTS: "vendorSubcategoryGroupProducts",
  VENDOR_COMMENT: "vendorComment",
  VENDOR_ORDER_ACTIVE: "vendorOrderActive",
  VENDOR_ORDER_PREVIOUS: "vendorOrderPrevious",
  ORDER_COMPLETE_RESTAURANT_DETAIL: "orderCompleteRestaurantDetail",
  ORDER_COMPLETE_SUPERMARKET_DETAIL: "orderCompleteSupermarketDetail",
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
  supermarket = 2,
  // restaurant vendor
  coffee = 4,
  daily = 5,
  protein = 6,
  fruit = 7,
  confectionery = 8,
  bakery = 9,
  attari = 10,
  flower = 11,
  // supermarket vendor
  tools = 12,
  kharazi = 13,
  homeGoods = 14,
  clothingGoods = 15,
  drug = 16,
  sportsGoods = 17,
  carTools = 18,
  electricalTools = 19,
  culture = 20,
  cosmetic = 21,
  moreJobs = 22,
  Governmental = 23,
  petshop = 25,
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
  EVendorsId.Governmental,
  EVendorsId.petshop,
  EVendorsId.moreJobs,
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
    id: EVendorsId.petshop,
    name: "petshop",
    isRestaurant: true,
  },
  {
    id: EVendorsId.flower,
    name: "flower",
    isRestaurant: true,
  },
  {
    id: EVendorsId.Governmental,
    name: "Governmental",
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
  {
    id: EVendorsId.drug,
    name: "drug",
    isSupermarket: true,
  },
  {
    id: EVendorsId.moreJobs,
    name: "morejobs",
    isSupermarket: true,
  },
];
