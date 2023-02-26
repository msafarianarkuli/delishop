export const API = {
  DOMAIN: process.env.DOMAIN_API,
  // auth
  SEND_CODE: "/api/users/send-code",
  REGISTER_ADDED_NAME: "/api/users/new-phone",
  UPDATE_USER_SESSION: "/api/auth/session",

  //get neshan address
  GET_ADDRESS: "https://api.neshan.org/v5/reverse",

  //vendors
  GET_VENDORS_CATEGORY: "/api/vendors/categories",
  GET_VENDORS_LIST: "/api/vendors/filter",
};
