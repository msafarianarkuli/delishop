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
