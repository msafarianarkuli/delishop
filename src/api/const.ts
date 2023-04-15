export const API = {
  DOMAIN: process.env.DOMAIN_API,
  // auth
  SEND_CODE: "/api/users/send-code",
  VERIFY_CODE: "/api/users/verify-code",
  REGISTER_ADDED_NAME: "/api/users/new-phone",
  UPDATE_USER_SESSION: "/api/auth/session",

  //get neshan address
  GET_ADDRESS: "https://api.neshan.org/v5/reverse",
  GET_SEARCH_ADDRESS: "https://api.neshan.org/v1/search",

  //vendors
  GET_VENDORS_CATEGORY: "/api/vendors/categories",
  GET_VENDORS_LIST: "/api/vendors/filter",
  GET_VENDOR_DETAIL: "/api/vendors/{id}",
  GET_VENDORS_TAGS: "/api/vendors/tags",
  GET_VENDOR_COMMENTS: "/api/vendors/{id}/comment",

  //supermarket
  GET_SUPERMARKET_MENU: "/api/market/{id}/menu",
  GET_SUPERMARKET_PRODUCTS: "/api/market/{id}/group-sub/{category}/products",
  GET_SUPERMARKET_GROUP_PRODUCTS: "/api/market/{id}/group/{category}/products",

  //user
  GET_USER_ADDRESSES: "/api/users/addresses",
  CREATE_USER_ADDRESS: "/api/users/addresses",
  UPDATE_USER_ADDRESS: "/api/users/addresses/{id}",
  DELETE_USER_ADDRESS: "/api/users/addresses/{id}",
  GET_USER_COIN: "/api/users/points",
  GET_USER_WALLET: "/api/users/transactions/balance",
  USER_WALLET_CHARGE: "/api/finance/transaction/charge",
  GET_USER_COIN_HISTORY: "/api/users/points/history",
  UPDATE_USER_PROFILE: "/api/users/profile",

  //orders
  GET_ORDERS_LIST: "/api/users/orders",
  ADD_ORDER: "/api/ecommerce/order",

  //logistic
  GET_LOGISTIC_CURRENT_PRICE: "/api/logistic/current",

  GET_SUGGESTION_SEARCH: "/api/suggest-search",

  //ads
  GET_BANNERS: "/api/banner/list",
};
