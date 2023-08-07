export function createLog(message: any, ...optionalParams: any[]) {
  if (process.env.NODE_ENV === "development") {
    console.log(message, ...optionalParams);
    return optionalParams;
  }
}

type ChangeNumberType = (str: string, convertToLang?: "fa" | "en") => string;
export const changeNumberLang: ChangeNumberType = (str, convertToLang = "fa") => {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  if (convertToLang === "fa") {
    englishNumbers.forEach((item, index) => {
      str = str.replace(new RegExp(item, "g"), persianNumbers[index]);
    });
  } else if (convertToLang === "en") {
    persianNumbers.forEach((item, index) => {
      str = str.replace(new RegExp(item, "g"), englishNumbers[index]);
    });
  }
  return str;
};

export function onlyNumberValue(text: string) {
  let tmp = text;
  if (tmp.search(",") !== -1 || tmp.search(".") !== -1) {
    tmp = tmp.replace(new RegExp(/,/, "g"), "");
    tmp = tmp.replace(new RegExp(/\./, "g"), "");
  }
  const number = tmp.match(/((\d+)|([۰۱۲۳۴۵۶۷۸۹]+))/g);
  if (number && number.length) {
    tmp = number.join("");
  } else {
    tmp = "";
  }
  if (tmp) {
    tmp = changeNumberLang(tmp, "en");
  }
  return tmp;
}

export function removeFirstZero(str: string) {
  let number = str;
  if (number) {
    const tmp = number.toString().match(/(^[0]+)/g);
    if (tmp && tmp.length) {
      number = number.substring(tmp[0].length);
      if (!number.length) {
        number = "0";
      }
    }
  }
  return number;
}

export function number2Digits(num: number): string {
  if (num < 10) return `0${num}`;
  return num.toString();
}

export const removeLastSlashUrl = (url: string) => {
  let tmp = url;
  if (url.length > 1 && url?.search(/\/$/) !== -1) {
    tmp = url.replace(/\/$/, "");
  }
  return tmp;
};

export const separatePathnameAndQuerySearch = (url: string) => {
  let querySearch = "";
  let pathname = "";
  if (url.search(/\?/) != -1) {
    const index = url.indexOf("?");
    querySearch = url.substring(index);
    pathname = url.substring(0, index);
    pathname = removeLastSlashUrl(pathname);
  } else {
    pathname = url;
  }

  return {
    querySearch,
    pathname,
  };
};

type TPaginationCalc = ({page, count}: {page?: number; count?: number}) => {skip: number; take: number};
export const paginationCalc: TPaginationCalc = ({page = 1, count = 20}) => {
  const take = count;
  const skip = (page - 1) * count;
  return {
    skip,
    take,
  };
};

type THasNextPage = ({page, total, count}: {page: number; total: number; count?: number}) => boolean;
export const hasNextPage: THasNextPage = ({page = 1, total, count = 20}) => page * count < total;

export const createPaginationParams = (query: {[x: string]: any}) => {
  let params: {[x: string]: any} = {...query};
  if (params?.page && !Array.isArray(params.page) && !isNaN(+params.page)) {
    const {skip, take} = paginationCalc({page: +params.page});
    params.skip = skip;
    params.take = take;
    delete params.page;
  }
  return params;
};

export const createKeyForUseQuery = (keys: (string | number)[], key?: string | string[]): (string | number)[] => {
  const tmp = [...keys];
  if (key) {
    if (Array.isArray(key)) {
      if (key.length) {
        tmp.push(...key);
      }
    } else {
      tmp.push(key);
    }
  }
  return tmp;
};

interface ILocation {
  lat: number;
  long: number;
}

type TUnit = "miles" | "kilometers" | "nauticalMiles";
type TGetDistanceFromLatLong = (props: {location1: ILocation; location2: ILocation; unit: TUnit}) => number;
export const getDistanceFromLatLong: TGetDistanceFromLatLong = ({location1, location2, unit}) => {
  const lat1 = location1.lat;
  const lon1 = location1.long;
  const lat2 = location2.lat;
  const lon2 = location2.long;

  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    const radlat1 = (Math.PI * lat1) / 180;
    const radlat2 = (Math.PI * lat2) / 180;
    const theta = lon1 - lon2;
    const radtheta = (Math.PI * theta) / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === "kilometers") {
      dist = dist * 1.609344;
    }
    if (unit === "nauticalMiles") {
      dist = dist * 0.8684;
    }
    return dist;
  }
};

export function copyContent(content: string) {
  if ("navigator" in window) {
    return navigator.clipboard.writeText(content);
  }
  return Promise.reject();
}

export const iranPhoneNumberRegex = /(^(09|۰۹))(\d{9}$|[۰۱۲۳۴۵۶۷۸۹]{9}$)/;
export const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
