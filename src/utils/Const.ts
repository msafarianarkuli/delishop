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

export const restaurantsVendor = [
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

export const supermarketVendor = [
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
